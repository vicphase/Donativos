'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditaraportacionCtrl
 * @description
 * # EditaraportacionCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditaraportacionCtrl', function (bienhechor, aportacion, $scope, $routeParams) {
      aportacion.get($routeParams.id)
          .then(function(data){
              $scope.aportacion = data.data;
              console.log($scope.aportacion);
          });

      bienhechor.all()
          .then(function(data){
              $scope.bienhechores = data.data;
          });


      $scope.actualizarAportacion = function(){
          aportacion.update($scope.aportacion);
      };

      $scope.openModal = function () {
          if(($scope.aportacion !== undefined)){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en la aportación con monto "+$scope.aportacion.monto+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.aportacion === undefined)){
              $("#cancelModal").modal();
              $scope.modalMessage = "Se perderan los cambios de la aportación";
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
