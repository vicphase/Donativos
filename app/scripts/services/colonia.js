'use strict';

/**
 * @ngdoc service
 * @name donativosApp.colonia
 * @description
 * # colonia
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('colonia', function ($http) {
    return {
      all: function () {
        return $http({method: 'GET', url: 'http://localhost/Donativos/api/services/colonia/getAll.php'});
      },
      get: function (id) {
        console.log("GET "+id);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/colonia/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (colonia) {
        console.log("POST");
        console.log(colonia);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/colonia/post.php',
          data: colonia,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (colonia) {
        console.log("Update de colonia");
        console.log(colonia);
        return $http({
          method: 'UPDATE',
          url: 'http://localhost/Donativos/api/services/colonia/update.php',
          data: colonia,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (colonia) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost/Donativos/api/services/colonia/delete.php',
          data: colonia,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };
  });
