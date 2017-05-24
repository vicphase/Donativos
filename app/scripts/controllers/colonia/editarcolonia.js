'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditarcoloniaCtrl
 * @description
 * # EditarcoloniaCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditarcoloniaCtrl', function (colonia, sector, $routeParams, $scope) {
      colonia.get($routeParams.id)
          .then(function(data){
              $scope.colonia = data.data;
              console.log($scope.colonia);
          });


      sector.all()
          .then(function(data){
              $scope.sectores = data;
              console.log($scope.sectores);
          });


      $scope.actualizarColonia = function(){
          colonia.update($scope.colonia);
      };

      $scope.openModal = function () {
          if(($scope.colonia !== undefined)){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en  "+$scope.colonia.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.colonia === undefined)){
              $("#cancelModal").modal();
              $scope.modalMessage = "Se perderan los cambios de  "+$scope.colonia.nombre;
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
