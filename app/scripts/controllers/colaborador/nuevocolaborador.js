'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:NuevocolaboradorCtrl
 * @description
 * # NuevocolaboradorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('NuevocolaboradorCtrl', function () {


      $scope.agregarColaborador = function () {
          colaborador.post($scope.colaborador);
      };


      $scope.openModal = function () {
          if($scope.formValidate('myForm')){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea añadir a "+$scope.colaborador.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.colaborador === undefined)){
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
