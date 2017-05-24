'use strict';

/**
 * @ngdoc service
 * @name donativosApp.sector
 * @description
 * # sector
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('sector', function ($http) {
    return {
      all: function () {
        return $http({method: 'GET', url: 'http://localhost/Donativos/api/services/sector/getAll.php'});
      },
      get: function (id) {
        console.log("GET "+id);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/sector/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (sector) {
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/sector/post.php',
          data: sector,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (sector) {
        console.log("Update de sector");
        console.log(sector);
        return $http({
          method: 'UPDATE',
          url: 'http://localhost/Donativos/api/services/sector/update.php',
          data: sector,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (sector) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost/Donativos/api/services/sector/delete.php',
          data: sector,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };
  });
