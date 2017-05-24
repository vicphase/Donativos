'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:SectorCtrl
 * @description
 * # SectorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('SectorCtrl', function (sector, $scope, zona) {
      sector.all()
          .then(function(data){
              $scope.sectores = data;
          });

      zona.all()
          .then(function (data) {
              $scope.zonas=data.data;
              console.log($scope.zonas);
          });

      $scope.seleccionarFila=function(sector){
          $scope.sector = sector;
      };

      $scope.filaSeleccionada = function(sector){
          return sector==$scope.sector;
      };

      $scope.eliminarSector=function(){
          sector.delete($scope.sector);
          $scope.actualizarTabla();
      };

      $scope.openModal = function () {
          if(!($scope.sector === undefined)){
              $("#myModal").modal();
              $scope.modalMessage = "¿Seguro que desea eliminar a "+$scope.sector.nombre+"?";
          }
      };

      $scope.closeModal=function(){
          $("#myModal").modal('hide');
      };

      $scope.actualizarTabla=function(){
          sector.all()
              .then(function(data){
                  $scope.sectores = data;
              });
      };

              $scope.getNombreZona = function (idZona) {
                  if($scope.zonas!=undefined){
                      for(var i=0;i<$scope.zonas.length;i++){
                          if(idZona==$scope.zonas[i].id)
                              return $scope.zonas[i].nombre;
                      }
                  }

              }
  });
