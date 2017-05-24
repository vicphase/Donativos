'use strict';

/**
 * @ngdoc service
 * @name donativosApp.donativo
 * @description
 * # donativo
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('donativo', function ($http) {
    return {
      all: function () {
        return $http({method: 'GET', url: 'http://localhost/Donativos/api/services/donativo/getAll.php'});
      },
      get: function (id) {
        console.log("GET "+id);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/donativo/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (donativo) {
        console.log("POST");
        console.log(donativo);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/donativo/post.php',
          data: donativo,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (donativo) {
        console.log("Update de donativo");
        console.log(donativo);
        return $http({
          method: 'UPDATE',
          url: 'http://localhost/Donativos/api/services/donativo/update.php',
          data: donativo,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (donativo) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost/Donativos/api/services/donativo/delete.php',
          data: donativo,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };  });
