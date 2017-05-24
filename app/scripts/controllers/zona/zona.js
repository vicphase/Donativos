'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:ZonaCtrl
 * @description
 * # ZonaCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('ZonaCtrl', function (zona,$scope) {

    zona.all()
        .then(function(data){
          $scope.zonas = data;
        });

    $scope.seleccionarFila=function(zona){
      $scope.zona = zona;
    };

    $scope.filaSeleccionada = function(zona){
      return zona==$scope.zona;
    };

    $scope.eliminarZona=function(){
      zona.delete($scope.zona);
      $scope.actualizarTabla();
    };

    $scope.openModal = function () {
      if(!($scope.zona === undefined)){
        $("#myModal").modal();
        $scope.modalMessage = "¿Seguro que desea eliminar a "+$scope.zona.nombre+"?";
      }
    };

    $scope.closeModal=function(){
      $("#myModal").modal('hide');
    };

    $scope.actualizarTabla=function(){
      zona.all()
          .then(function(data){
            $scope.zonas = data;
          });
    };
  });
