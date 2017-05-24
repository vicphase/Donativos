'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditarsectorCtrl
 * @description
 * # EditarsectorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditarsectorCtrl', function (sector, $scope, $routeParams, zona) {
      sector.get($routeParams.id)
          .then(function(data){
              $scope.sector = data.data;
              console.log($scope.sector);
          });


      zona.all()
          .then(function(data){
              $scope.zonas = data;
              console.log($scope.zonas);
          })


      $scope.actualizarSector = function(){
          sector.update($scope.sector);
      };

      $scope.openModal = function () {
          if(($scope.sector !== undefined)){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en  "+$scope.sector.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.sector === undefined)){
              $("#cancelModal").modal();
              $scope.modalMessage = "Se perderan los cambios de  "+$scope.sector.nombre;
          }
      };

      $scope.closeModal=function(){
          $("#editModal").modal('hide');
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
      };

      $scope.closeCancelModal=function(){
          $("#cancelModal").modal('hide');
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
      };
  });
