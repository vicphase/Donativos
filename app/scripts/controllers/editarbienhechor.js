'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditarbienhechorCtrl
 * @description
 * # EditarbienhechorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditarbienhechorCtrl', function ($scope, $routeParams, bienHechores) {

      

      bienHechores.get($routeParams.id)
          .then(function(data){
              $scope.bienHechor = data.data;
              $scope.bienHechor.fechaNacimiento=new Date($scope.bienHechor.fechaNacimiento);
              console.log($scope.bienHechor);
          });
        

      $scope.actualizarBienHechor = function(){
            bienHechores.update($scope.bienHechor);
      };

      $scope.openModal = function () {
          if(!($scope.bienHechor === undefined)){
              $("#editModal").modal()
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en  "+$scope.bienHechor.nombre
                  +" "+$scope.bienHechor.apellidoPaterno
                  +" "+$scope.bienHechor.apellidoMaterno+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.bienHechor === undefined)){
              $("#cancelModal").modal()
              $scope.modalMessage = "Se perderan los cambios de  "+$scope.bienHechor.nombre
                  +" "+$scope.bienHechor.apellidoPaterno
                  +" "+$scope.bienHechor.apellidoMaterno+" si cancela la modificación.";
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
