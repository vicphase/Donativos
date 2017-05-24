'use strict';

/**
 * @ngdoc service
 * @name donativosApp.usuario
 * @description
 * # usuario
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('usuario', function ($http) {
    return {
      all: function () {
        return $http({method: 'GET', url: 'http://localhost/Donativos/api/services/usuario/getAll.php'});
      },
      get: function (id) {
        console.log("GET "+id);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/usuario/zona/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (usuario) {
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/usuario/post.php',
          data: usuario,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (usuario) {
        return $http({
          method: 'UPDATE',
          url: 'http://localhost/Donativos/api/services/usuario/update.php',
          data: usuario,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (usuario) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost/Donativos/api/services/usuario/delete.php',
          data: usuario,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };
  });
