'use strict';

/**
 * @ngdoc service
 * @name donativosApp.bienhechor
 * @description
 * # bienhechor
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('bienhechor', function ($http) {
    return {
      all: function () {
        return $http({method: 'GET', url: 'http://localhost/Donativos/api/services/bienhechor/getAll.php'});
      },
      get: function (id) {
        console.log("GET "+id);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/bienhechor/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (bienhechor) {
        console.log("POST");
        console.log(bienhechor);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/bienhechor/post.php',
          data: bienhechor,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (bienhechor) {
        console.log("Update de bienhechor");
        console.log(bienhechor);
        return $http({
          method: 'UPDATE',
          url: 'http://localhost/Donativos/api/services/bienhechor/update.php',
          data: bienhechor,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (bienhechor) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost/Donativos/api/services/bienhechor/delete.php',
          data: bienhechor,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };
  });
