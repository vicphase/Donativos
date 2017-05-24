'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:NuevodonativoCtrl
 * @description
 * # NuevodonativoCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('NuevodonativoCtrl', function ($scope, donativo, bienhechor, colaborador) {
      $scope.agregarDonativo = function () {
          donativo.post($scope.donativo);
      };

      bienhechor.all()
          .then(function(data){
              $scope.bienhechores = data.data;
              console.log($scope.bienhechores);
          });

      colaborador.all()
          .then(function(data){
              $scope.colaboradores = data.data;
              console.log($scope.colaboradores);
          });


      $scope.openModal = function () {
          if($scope.formValidate('myForm')){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en el donativo con folio "+$scope.donativo.folioRecibo+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.donativo === undefined)){
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
