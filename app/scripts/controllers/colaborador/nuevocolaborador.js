'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:NuevocolaboradorCtrl
 * @description
 * # NuevocolaboradorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('NuevocolaboradorCtrl', function ($scope, colaborador, colonia, sector, zona, usuario ) {


      $scope.agregarColaborador = function () {
          usuario.post($scope.usuario)
              .then(function(){
                  usuario.all().
                      then(function(data){
                      $scope.usuarios=data.data;
                      $scope.colaborador.idUsuario=$scope.getIdUsuario($scope.usuario);
                      colaborador.post($scope.colaborador);
                  });

              });

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

      $scope.getIdUsuario=function(usuario){
          for(var i=0;i<$scope.usuarios.length;i++){
              if($scope.usuarios[i].username==usuario.username && $scope.usuarios[i].password==usuario.password){
                  console.log($scope.usuarios[i].id);
                  return $scope.usuarios[i].id;
              }
          }
      }
  });
