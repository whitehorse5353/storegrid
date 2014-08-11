'use strict';

/**
 * @ngdoc function
 * @name storeGridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeGridApp
 */
angular.module('storeGridApp')
  .controller('MainCtrl',[
  	'$scope', 'webSocketSerice', 'storeitemsdataservice', '$timeout',
  	function ($scope, webSocketSerice, storeitemsdataservice, $timeout) {      	
  	$scope.model = {};	  	  	  	    
  	$scope.model.itemsIdRecivedFromPi = {};
    $scope.initPiSocket = function(){    	    	    	    	
    	webSocketSerice.socket().then(function(data){    	
	    	if($scope.model.itemsIdRecivedFromPi.hasOwnProperty(data)){
	    		angular.forEach($scope.model.itemsIdRecivedFromPi, function(d){
	    			(d!==data) ? $scope.model.itemsIdRecivedFromPi[data] = data : '';    			
	    		});    		    		
	    	}else{    		
	    		$scope.model.itemsIdRecivedFromPi[data] = data;	    		
	    	}    	
    	});	    	
    	 
    	$timeout($scope.initPiSocket, 1000);    	
    };

    $scope.getSelectedItemsModel = function() {    	    	
    	$scope.model.viewModel = storeitemsdataservice.massageModelData($scope.model.itemsIdRecivedFromPi);    	
    	$timeout($scope.getSelectedItemsModel, 1000);   
   	}; 

  }]);
