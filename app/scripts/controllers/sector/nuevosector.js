'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:NuevosectorCtrl
 * @description
 * # NuevosectorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('NuevosectorCtrl', function (sector, $scope, zona) {

      zona.all()
          .then(function(data){
              $scope.zonas = data;
              console.log($scope.zonas);
          });

      $scope.agregarSector = function () {
          sector.post($scope.sector);
      };


      $scope.openModal = function () {
          if($scope.formValidate('myForm')){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea añadir a "+$scope.sector.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.sector === undefined)){
              $("#cancelModal").modal()
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
