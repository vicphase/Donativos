'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:BienhechorCtrl
 * @description
 * # BienhechorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('BienhechorCtrl', function ($scope, bienhechor) {
      bienhechor.all()
          .then(function(data){
              $scope.bienhechores = data;
          });
      

      $scope.seleccionarFila=function(bienhechor){
          $scope.bienhechor = bienhechor;
      };

      $scope.filaSeleccionada = function(bienhechor){
          return bienhechor==$scope.bienhechor;
      };

      $scope.eliminarBienhechor=function(){
          bienhechor.delete($scope.bienhechor);
          $scope.actualizarTabla();
      };

      $scope.openModal = function () {
          if(!($scope.bienhechor === undefined)){
              $("#myModal").modal();
              $scope.modalMessage = "¿Seguro que desea eliminar a "+$scope.bienhechor.nombre+"?";
          }
      };

      $scope.closeModal=function(){
          $("#myModal").modal('hide');
      };

      $scope.actualizarTabla=function(){
          bienhechor.all()
              .then(function(data){
                  $scope.bienhechores = data;
              });
      };

      $scope.getNombreSector = function (idSector) {
          if($scope.sectores!=undefined){
              for(var i=0;i<$scope.sectores.length;i++){
                  if(idSector==$scope.sectores[i].id)
                      return $scope.sectores[i].nombre;
              }
          }

      }
  });
