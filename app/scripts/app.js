'use strict';

/**
 * @ngdoc overview
 * @name donativosApp
 * @description
 * # donativosApp
 *
 * Main module of the application.
 */
angular
  .module('donativosApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/zona/all.html',
          controller: 'ZonaCtrl',
          controllerAs: 'zona'
      })
      .when('/zona', {
        templateUrl: 'views/zona/all.html',
        controller: 'ZonaCtrl',
        controllerAs: 'zona'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// hola soy eris
// hola soy betillo