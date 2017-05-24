'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditarbienhechorCtrl
 * @description
 * # EditarbienhechorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditarbienhechorCtrl', function () {
      bienhechor.get($routeParams.id)
          .then(function(data){
              $scope.bienhechor = data.data;
              console.log($scope.bienhechor);
          });


      sector.all()
          .then(function(data){
              $scope.sectores = data;
              console.log($scope.sectores);
          });


      $scope.actualizarBienhechor = function(){
          bienhechor.update($scope.bienhechor);
      };

      $scope.openModal = function () {
          if(($scope.bienhechor !== undefined)){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en  "+$scope.bienhechor.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.bienhechor === undefined)){
              $("#cancelModal").modal();
              $scope.modalMessage = "Se perderan los cambios de  "+$scope.bienhechor.nombre;
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
