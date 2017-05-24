'use strict';

/**
 * @ngdoc service
 * @name donativosApp.zona
 * @description
 * # zona
 * Service in the donativosApp.
 */
angular.module('donativosApp')
  .service('zona', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      all: function () {
        return $http({method: 'GET', url: '../api/services/zona/getAll.php'});
      },
      get: function (id) {
        return $http({
          method: 'POST',
          url: '../api/services/zona/get.php',
          data: id,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      post: function (zona) {
        return $http({
          method: 'POST',
          url: '../api/services/zona/post.php',
          data: zona,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      update: function (zona) {
        return $http({
          method: 'UPDATE',
          url: '../api/services/zona/update.php',
          data: zona,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      },
      delete: function (zona) {
        return $http({
          method: 'DELETE',
          url: '../api/services/zona/delete.php',
          data: zona,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
      }
    };
  });
