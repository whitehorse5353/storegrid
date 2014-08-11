'use strict';

/**
 * @ngdoc service
 * @name storeGridApp.Storeitemsdataservice
 * @description
 * # Storeitemsdataservice
 * Service in the storeGridApp.
 */
angular.module('storeGridApp')
  .service('storeitemsdataservice', function storeitemsdataservice() {
    return {
    	getStoreItems: function(){
    		return [
    			{'id': '148,18,65,164', 'name': 'cinthol soap', 'price': '100'},
    			{'id': '125,221,112,10', 'name': 'dettol handwash', 'price': '200'}
    		];
    	},
    	massageModelData: function(data){
    		var localData = this.getStoreItems(),
    			tmp = [];    			    		    		
    		for(var i=0; i < localData.length; i++){
    			if(data !== undefined && data.hasOwnProperty(localData[i].id)){    				
    				tmp.push(localData[i]);		    				
    			}    			
    		}    		
    		return tmp;    			     	
    	}    	
    };
  });
