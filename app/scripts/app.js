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
        .when('/nuevaZona', {
            templateUrl: 'views/zona/new.html',
            controller: 'NuevazonaCtrl',
            controllerAs: 'nuevaZona'
        })
        .when('/editarZona/:id', {
            templateUrl: 'views/zona/edit.html',
            controller: 'EditarzonaCtrl',
            controllerAs: 'editarZona'
        })
      .when('/sector', {
        templateUrl: 'views/sector/all.html',
        controller: 'SectorCtrl',
        controllerAs: 'sector'
      })
        .when('/nuevoSector', {
            templateUrl: 'views/sector/new.html',
            controller: 'NuevosectorCtrl',
            controllerAs: 'nuevoSector'
        })
        .when('/editarSector/:id', {
            templateUrl: 'views/sector/edit.html',
            controller: 'EditarsectorCtrl',
            controllerAs: 'editarSector'
        })
      .when('/colonia', {
        templateUrl: 'views/colonia/all.html',
        controller: 'ColoniaCtrl',
        controllerAs: 'colonia'
      })
        .when('/nuevaColonia', {
            templateUrl: 'views/colonia/new.html',
            controller: 'NuevacoloniaCtrl',
            controllerAs: 'nuevaColonia'
        })
        .when('/editarColonia/:id', {
            templateUrl: 'views/colonia/edit.html',
            controller: 'EditarcoloniaCtrl',
            controllerAs: 'editarColonia'
        })
      .when('/colaborador', {
            templateUrl: 'views/colaborador/all.html',
            controller: 'ColaboradorCtrl',
            controllerAs: 'colaborador'
        })
        .when('/nuevoColaborador', {
            templateUrl: 'views/colaborador/new.html',
            controller: 'NuevocolaboradorCtrl',
            controllerAs: 'nuevoColaborador'
        })
        .when('/editarColaborador/:id', {
            templateUrl: 'views/colaborador/edit.html',
            controller: 'EditarcolaboradorCtrl',
            controllerAs: 'editarColaborador'
        })
      .when('/bienhechor', {
        templateUrl: 'views/bienhechor/all.html',
        controller: 'BienhechorCtrl',
        controllerAs: 'bienhechor'
      })
      .when('/nuevoBienhechor', {
        templateUrl: 'views/bienhechor/new.html',
        controller: 'NuevobienhechorCtrl',
        controllerAs: 'nuevobienhechor'
      })
      .when('/editarBienhechor/:id', {
        templateUrl: 'views/bienhechor/edit.html',
        controller: 'EditarbienhechorCtrl',
        controllerAs: 'editarbienhechor'
      })
      .otherwise({
        redirectTo: '/'
      });
  });