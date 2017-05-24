'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditardonativoCtrl
 * @description
 * # EditardonativoCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditardonativoCtrl', function (donativo, $routeParams, bienhechor, colaborador, $scope) {
      donativo.get($routeParams.id)
          .then(function(data){
              $scope.donativo = data.data;
              console.log($scope.donativo);
          });

      bienhechor.all()
          .then(function(data){
              $scope.bienhechores = data.data;
          });

      colaborador.all()
          .then(function(data){
              $scope.colaboradores = data.data;
          });


      $scope.actualizarDonativo = function(){
          donativo.update($scope.donativo);
      };

      $scope.openModal = function () {
          if(($scope.donativo !== undefined)){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en el donativo con folio "+$scope.donativo.folioRecibo+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.donativo === undefined)){
              $("#cancelModal").modal();
              $scope.modalMessage = "Se perderan los cambios del donativo";
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
