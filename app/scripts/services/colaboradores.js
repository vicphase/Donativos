'use strict';

/**
 * @ngdoc service
 * @name donativosApp.colaboradores
 * @description
 * # colaboradores
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('colaboradores', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      all: function () {
        return $http({method: 'GET', url: '../api/services/colaboradores/getAll.php'});
      },
      get: function (id) {
        return $http({
          method: 'POST',
          url: '../api/services/colaboradores/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (colaborador) {
        return $http({
          method: 'POST',
          url: '../api/services/colaboradores/post.php',
          data: colaborador,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (colaborador) {
        return $http({
          method: 'UPDATE',
          url: '../api/services/colaboradores/update.php',
          data: colaborador,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (colaborador) {
        return $http({
          method: 'DELETE',
          url: '../api/services/colaboradoresR/delete.php',
          data: colaborador,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }

    };
  });
