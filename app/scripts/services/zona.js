'use strict';

/**
 * @ngdoc service
 * @name donativosApp.zona
 * @description
 * # zona
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('zona', function ($http) {
    return {
      all: function () {
        return $http({method: 'GET', url: 'http://localhost/Donativos/api/services/zona/getAll.php'});
      },
      get: function (id) {
        console.log("GET "+id);
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/zona/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (zona) {
        return $http({
          method: 'POST',
          url: 'http://localhost/Donativos/api/services/zona/post.php',
          data: zona,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (zona) {
        return $http({
          method: 'UPDATE',
          url: 'http://localhost/Donativos/api/services/zona/update.php',
          data: zona,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (zona) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost/Donativos/api/services/zona/delete.php',
          data: zona,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };
  });
