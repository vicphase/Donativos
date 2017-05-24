'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:EditarzonaCtrl
 * @description
 * # EditarzonaCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('EditarzonaCtrl', function (zona, $scope, $routeParams) {

      console.log($routeParams.id);

      zona.get($routeParams.id)
          .then(function(data){
              $scope.zona = data.data;
              console.log($scope.zona);
          });


      $scope.actualizarZona = function(){
          zona.update($scope.zona);
      };

      $scope.openModal = function () {
          if(($scope.bienHechor === undefined)){
              $("#editModal").modal();
              $scope.modalMessage = "¿Seguro que desea guardar los cambios en  "+$scope.zona.nombre+"?";
          }
      };

      $scope.openCancelModal = function () {
          if(!($scope.zona === undefined)){
              $("#cancelModal").modal();
              $scope.modalMessage = "Se perderan los cambios de  "+$scope.zona.nombre;
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
