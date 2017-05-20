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
          templateUrl: 'views/bienHechores/all.html',
          controller: 'BienhechoresCtrl',
          controllerAs: 'bienHechores'
      })
      .when('/bienHechores', {
        templateUrl: 'views/bienHechores/all.html',
        controller: 'BienhechoresCtrl',
        controllerAs: 'bienHechores'
      })
      .when('/nuevoBienHechor', {
        templateUrl: 'views/bienHechores/new.html',
        controller: 'NuevobienhechorCtrl',
        controllerAs: 'nuevoBienHechor'
      })
      .when('/editarBienHechor/:id', {
        templateUrl: 'views/bienHechores/edit.html',
        controller: 'EditarbienhechorCtrl',
        controllerAs: 'editarBienHechor'
      })
      .when('/colaboradores', {
        templateUrl: 'views/colaboradores/all.html',
        controller: 'ColaboradoresCtrl',
        controllerAs: 'colaboradores'
      })
      .when('/editarColaborador/:id', {
        templateUrl: 'views/colaboradores/edit.html',
        controller: 'EditarcolaboradorCtrl',
        controllerAs: 'editarColaborador'
      })
      .when('/nuevoColaborador', {
        templateUrl: 'views/colaboradores/new.html',
        controller: 'NuevocolaboradorCtrl',
        controllerAs: 'nuevoColaborador'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// hola soy eris
// hola soy betillo