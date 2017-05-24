'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:ColoniaCtrl
 * @description
 * # ColoniaCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('ColoniaCtrl', function (colonia, sector, $scope) {
      colonia.all()
          .then(function(data){
              $scope.colonias = data;
          });

      sector.all()
          .then(function (data) {
              $scope.sectores=data.data;
              console.log($scope.sectores);
          });

      $scope.seleccionarFila=function(colonia){
          $scope.colonia = colonia;
      };

      $scope.filaSeleccionada = function(colonia){
          return colonia==$scope.colonia;
      };

      $scope.eliminarColonia=function(){
          colonia.delete($scope.colonia);
          $scope.actualizarTabla();
      };

      $scope.openModal = function () {
          if(!($scope.colonia === undefined)){
              $("#myModal").modal();
              $scope.modalMessage = "¿Seguro que desea eliminar a "+$scope.colonia.nombre+"?";
          }
      };

      $scope.closeModal=function(){
          $("#myModal").modal('hide');
      };

      $scope.actualizarTabla=function(){
          colonia.all()
              .then(function(data){
                  $scope.colonias = data;
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
