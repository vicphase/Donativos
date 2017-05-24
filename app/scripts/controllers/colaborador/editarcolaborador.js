'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditarcolaboradorCtrl
 * @description
 * # EditarcolaboradorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditarcolaboradorCtrl', function ($scope, colaborador, colonia, sector, zona, $routeParams) {
      colaborador.get($routeParams.id)
          .then(function(data){
              $scope.colaborador = data.data;
              console.log($scope.colaborador);

              colonia.get($scope.colaborador.idColonia)
                  .then(function(data){
                      var idSector = data.data.idSector;
                      $scope.colaborador.idSector=idSector;
                      sector.get(idSector)
                          .then(function(data){
                              var idZona=data.data.idZona;
                              $scope.colaborador.idZona=idZona;
                          });
                  });
          });



      colonia.all()
          .then(function(data){
              $scope.colonias = data.data;
          });

      $scope.coloniaEnSector=function(idColonia){
          return idColonia==$scope.idSector;
      };

      sector.all()
          .then(function (data) {
              $scope.sectores=data.data;
              console.log($scope.sectores);
          });

      $scope.sectorEnZona=function(idSector){
          return idSector==$scope.idZona;
      };

      zona.all()
          .then(function (data) {
              $scope.zonas=data.data;
              console.log($scope.zonas);
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
