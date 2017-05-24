'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditarbienhechorCtrl
 * @description
 * # EditarbienhechorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditarbienhechorCtrl', function ($scope, bienhechor, colonia, sector, zona, $routeParams) {
      bienhechor.get($routeParams.id)
          .then(function(data){
              $scope.bienhechor = data.data;
              $scope.bienhechor.fechaNacimiento=new Date($scope.bienhechor.fechaNacimiento);
              console.log($scope.bienhechor);
              if($scope.bienhechor.nicho==0)
                  $scope.bienhechor.nicho=false;
              else
                  $scope.bienhechor.nicho=true;

              colonia.get($scope.bienhechor.idColonia)
                  .then(function(data){
                      var idSector = data.data.idSector;
                      $scope.bienhechor.idSector=idSector;
                      sector.get(idSector)
                          .then(function(data){
                              var idZona=data.data.idZona;
                              $scope.bienhechor.idZona=idZona;
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

      $scope.true=true;
      $scope.false=false;

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
