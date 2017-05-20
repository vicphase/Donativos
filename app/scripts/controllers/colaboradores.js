'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:ColaboradoresCtrl
 * @description
 * # ColaboradoresCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('ColaboradoresCtrl', function (colaboradores, $scope) {

    colaboradores.all()
        .then(function(data){
          $scope.colaboradores = data;
        });

    $scope.seleccionarFila=function(colaborador){
      $scope.colaborador = colaborador;
    };

    $scope.filaSeleccionada = function(colaborador){
      return colaborador==$scope.colaborador
    };

    $scope.eliminarcolaborador=function(){
      colaboradores.delete($scope.colaborador);
      $scope.actualizarTabla();
    };

    $scope.openModal = function () {
      if(!($scope.colaborador === undefined)){
        $("#myModal").modal()
        $scope.modalMessage = "¿Seguro que desea eliminar a "+$scope.colaborador.nombre
            +" "+$scope.colaborador.apellidoPaterno
            +" "+$scope.colaborador.apellidoMaterno+"?";
      }
    };

    $scope.closeModal=function(){
      $("#myModal").modal('hide');
    };

    $scope.actualizarTabla=function(){
      colaboradores.all()
          .then(function(data){
            $scope.colaboradores = data;
          });
    };
      
  });
