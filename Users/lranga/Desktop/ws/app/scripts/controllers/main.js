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
    $scope.initPiSocket = function(){
      webSocketSerice.initSocket()
        .then(function(op){          
        	$scope.model.viewModel = storeitemsdataservice.massageModelData(op);
        });                       
    	$timeout($scope.initPiSocket, 300);    	      
    };
  }]);
