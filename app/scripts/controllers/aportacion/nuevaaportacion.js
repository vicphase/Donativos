'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:NuevaaportacionCtrl
 * @description
 * # NuevaaportacionCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('NuevaaportacionCtrl', function (bienhechor, aportacion, $scope) {
      $scope.agregarAportacion = function () {
          aportacion.post($scope.aportacion);
      };

      bienhechor.all()
          .then(function(data){
              $scope.bienhechores = data.data;
              console.log($scope.bienhechores);
          });


      $scope.openModal = function () {
          if($scope.formValidate('myForm')){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea añadir a la aportacion con monto"+$scope.aportacion.monto+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.aportacion === undefined)){
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
