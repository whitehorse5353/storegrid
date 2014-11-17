'use strict';

/**
 * @ngdoc overview
 * @name storeGridApp
 * @description
 * # storeGridApp
 *
 * Main module of the application.
 */
angular
  .module('storeGridApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
