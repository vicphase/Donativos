'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:NuevobienhechorCtrl
 * @description
 * # NuevobienhechorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('NuevobienhechorCtrl', function ($scope, bienhechor, colonia, sector, zona) {
      $scope.agregarBienhechor = function () {
          bienhechor.post($scope.bienhechor);
      };

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


      $scope.openModal = function () {
          if($scope.formValidate('myForm')){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea añadir a "+$scope.bienhechor.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.bienhechor === undefined)){
              $("#cancelModal").modal();
              $scope.modalMessage = "Se perderan los cambios datos capturados si cancela";
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

      $scope.formValidate= function(attr_id){
          var result = true;
          $('#'+attr_id).validator('validate');
          $('#'+attr_id+' .form-group').each(function(){
              if($(this).hasClass('has-error')){
                  result = false;
                  return false;
              }
          });
          return result;
      }
  });
