'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:BienhechoresCtrl
 * @description
 * # BienhechoresCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('BienhechoresCtrl', function (bienHechores, $scope) {

      bienHechores.all()
          .then(function(data){
              $scope.bienHechores = data;
          });
      
      $scope.seleccionarFila=function(bienHechor){
          $scope.bienHechor = bienHechor;
      };
      
      $scope.filaSeleccionada = function(bienHechor){
        return bienHechor==$scope.bienHechor
      };
      
      $scope.eliminarBienhechor=function(){
          bienHechores.delete($scope.bienHechor);
          $scope.actualizarTabla();
      };

      $scope.openModal = function () {
          if(!($scope.bienHechor === undefined)){
              $("#myModal").modal()
              $scope.modalMessage = "¿Seguro que desea eliminar a "+$scope.bienHechor.nombre
              +" "+$scope.bienHechor.apellidoPaterno
                  +" "+$scope.bienHechor.apellidoMaterno+"?";
          }
      };

      $scope.closeModal=function(){
          $("#myModal").modal('hide');
      };

      $scope.actualizarTabla=function(){
          bienHechores.all()
              .then(function(data){
                  $scope.bienHechores = data;
              });
      };
  });

//el eris formatea tu compu
