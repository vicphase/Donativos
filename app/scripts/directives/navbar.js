'use strict';

/**
 * @ngdoc directive
 * @name donativosApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('donativosApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
        template: '../../views/templates/navbar.html'
      };
    });
