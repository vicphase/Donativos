'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:ColaboradorCtrl
 * @description
 * # ColaboradorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('ColaboradorCtrl', function (colaborador, $scope) {
      colaborador.all()
          .then(function(data){
              $scope.colaboradores = data;
          });
      
      $scope.seleccionarFila=function(colaborador){
          $scope.colaborador = colaborador;
      };

      $scope.filaSeleccionada = function(colaborador){
          return colaborador==$scope.colaborador;
      };

      $scope.eliminarColaborador=function(){
          colaborador.delete($scope.colaborador);
          $scope.actualizarTabla();
      };

      $scope.openModal = function () {
          if(!($scope.colaborador === undefined)){
              $("#myModal").modal();
              $scope.modalMessage = "¿Seguro que desea eliminar a "+$scope.colaborador.nombre+"?";
          }
      };

      $scope.closeModal=function(){
          $("#myModal").modal('hide');
      };

      $scope.actualizarTabla=function(){
          colaborador.all()
              .then(function(data){
                  $scope.colaboradores = data;
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
