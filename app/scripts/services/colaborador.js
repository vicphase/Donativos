'use strict';

/**
 * @ngdoc service
 * @name donativosApp.colaborador
 * @description
 * # colaborador
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('colaborador', function () {
    return {
      all: function () {
        return $http({method: 'GET', url: 'http://localhost/Donativos/api/services/colaborador/getAll.php'});
      },
      get: function (id) {
        console.log("GET "+id);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/colaborador/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (colaborador) {
        console.log("POST");
        console.log(colaborador);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/colaborador/post.php',
          data: colaborador,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (colaborador) {
        console.log("Update de colaborador");
        console.log(colaborador);
        return $http({
          method: 'UPDATE',
          url: 'http://localhost/Donativos/api/services/colaborador/update.php',
          data: colaborador,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (colaborador) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost/Donativos/api/services/colaborador/delete.php',
          data: colaborador,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };
  });
