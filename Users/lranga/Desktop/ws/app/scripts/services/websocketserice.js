'use strict';

/**
 * @ngdoc service
 * @name storeGridApp.webSocketSerice
 * @description
 * # webSocketSerice
 * Factory in the storeGridApp.
 */
angular.module('storeGridApp')
  .factory('webSocketSerice', ['$q', function ($q) {    
    var ws = new WebSocket('ws://192.168.1.157:8080/');    
    
    
    // Public API here 
    return {
      socket: function(){ 
        var deferred = $q.defer();
        ws.onopen = function(){ 
          console.log('Socket has been opened!');
        };
        ws.onmessage = function(message) {                      
          deferred.resolve(message.data);          
        }; 
        return deferred.promise;
      }
    };
  }]);