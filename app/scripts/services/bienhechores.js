'use strict';

/**
 * @ngdoc service
 * @name donativosApp.bienHechores
 * @description
 * # bienHechores
 * Service in the donativosApp.
 */
angular.module('donativosApp')
    .service('bienHechores', function ($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            all: function () {
                return $http({method: 'GET', url: '../api/services/bienHechores/getAll.php'});
            },
            get: function (id) {
                return $http({
                    method: 'POST',
                    url: '../api/services/bienHechores/get.php',
                    data: id,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            },
            post: function (bienHechor) {
                return $http({
                    method: 'POST',
                    url: '../api/services/bienHechores/post.php',
                    data: bienHechor,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            },
            update: function (bienHechor) {
                return $http({
                    method: 'UPDATE',
                    url: '../api/services/bienHechores/update.php',
                    data: bienHechor,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            },
            delete: function (bienHechor) {
                return $http({
                    method: 'DELETE',
                    url: '../api/services/bienHechores/delete.php',
                    data: bienHechor,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            }
            
        };

    });
