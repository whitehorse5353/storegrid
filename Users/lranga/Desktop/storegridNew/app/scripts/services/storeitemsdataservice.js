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
    			{'id': '148,18,65,164', 'name': 'Iphone', 'price': 40000},
    			{'id': '125,221,112,10', 'name': 'Laptop', 'price': 60000},
                {'id': '250,248,85,94 ', 'name': 'Watch', 'price': 4000}
    		];
    	},
    	massageModelData: function(data){
    		var localData = this.getStoreItems(),
    			tmp = [];
    		for(var i=0; i < localData.length; i++){
    			if(data !== undefined && data.indexOf(localData[i].id) !== -1){    				
    				tmp.push(localData[i]);		    				
    			}    			
    		}    	                	
    		return tmp;    			     	
    	}    	
    };
  });
