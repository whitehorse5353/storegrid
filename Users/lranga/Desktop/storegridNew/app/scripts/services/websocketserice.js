'use strict';

/**
 * @ngdoc service
 * @name storeGridApp.webSocketSerice
 * @description
 * # webSocketSerice
 * Factory in the storeGridApp.
 */
angular.module('storeGridApp')
  .factory('webSocketSerice', ['$q', '$timeout', function ($q, $timeout) {    
    var ws = new WebSocket('ws://192.168.1.157:8080/');        
    var itemsIdRecivedFromPi = [];    
    return {
      initSocket: function(){         
        var deferred = $q.defer();
        ws.onopen = function(){ 
          console.log('Socket has been opened!');
        };
        ws.onmessage = function(message) {                                    
          var data = message.data;           
          if(itemsIdRecivedFromPi.length <= 0){            
            itemsIdRecivedFromPi.push(data);                                   
          }else{                                    
            if(itemsIdRecivedFromPi.indexOf(data) !== -1){
              $timeout(function(){
                angular.forEach(itemsIdRecivedFromPi, function(dop){
                  if(dop!==data){
                    itemsIdRecivedFromPi.splice(itemsIdRecivedFromPi.indexOf(dop),1);  
                  }                
                });                
              },300);                            
            }else{
              itemsIdRecivedFromPi.push(data);
            }                          
          }
          deferred.resolve(itemsIdRecivedFromPi);                  
        };
        return deferred.promise;         
      }      
    };
  }]);