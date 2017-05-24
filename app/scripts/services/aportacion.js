'use strict';

/**
 * @ngdoc service
 * @name donativosApp.aportacion
 * @description
 * # aportacion
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('aportacion', function ($http) {
    return {
      all: function () {
        return $http({method: 'GET', url: 'http://localhost/Donativos/api/services/aportacion/getAll.php'});
      },
      get: function (id) {
        console.log("GET "+id);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/aportacion/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (aportacion) {
        console.log("POST");
        console.log(aportacion);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/aportacion/post.php',
          data: aportacion,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (aportacion) {
        console.log("Update de aportacion");
        console.log(aportacion);
        return $http({
          method: 'UPDATE',
          url: 'http://localhost/Donativos/api/services/aportacion/update.php',
          data: aportacion,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (aportacion) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost/Donativos/api/services/aportacion/delete.php',
          data: aportacion,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };
  });
