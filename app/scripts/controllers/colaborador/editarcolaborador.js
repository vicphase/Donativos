'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditarcolaboradorCtrl
 * @description
 * # EditarcolaboradorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditarcolaboradorCtrl', function () {
      colaborador.get($routeParams.id)
          .then(function(data){
              $scope.colaborador = data.data;
              console.log($scope.colaborador);
          });


      sector.all()
          .then(function(data){
              $scope.sectores = data;
              console.log($scope.sectores);
          });


      $scope.actualizarColaborador = function(){
          colaborador.update($scope.colaborador);
      };

      $scope.openModal = function () {
          if(($scope.colaborador !== undefined)){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en  "+$scope.colaborador.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.colaborador === undefined)){
              $("#cancelModal").modal();
              $scope.modalMessage = "Se perderan los cambios de  "+$scope.colaborador.nombre;
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
