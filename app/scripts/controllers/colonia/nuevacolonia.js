'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:NuevacoloniaCtrl
 * @description
 * # NuevacoloniaCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('NuevacoloniaCtrl', function (colonia, sector, $scope) {

      sector.all()
          .then(function(data){
              $scope.sectores = data;
              console.log($scope.sectores);
          });

      $scope.agregarColonia = function () {
          colonia.post($scope.colonia);
      };


      $scope.openModal = function () {
          if($scope.formValidate('myForm')){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea añadir a "+$scope.colonia.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.colonia === undefined)){
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
