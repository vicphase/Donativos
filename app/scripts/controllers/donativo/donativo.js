'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:DonativoCtrl
 * @description
 * # DonativoCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('DonativoCtrl', function (donativo, bienhechor, colaborador, $scope) {
      $scope.existeDonativo=false;
      donativo.all()
          .then(function(data){
              $scope.donativos = data;
          });

      bienhechor.all()
          .then(function(data){
              $scope.bienhechores = data.data;
          });

      $scope.nombreBienhechor=function(idBienhechor,donativo){
          if($scope.bienhechores!=undefined){
              for(var i=0;i<$scope.bienhechores.length;i++){
                  if(idBienhechor==$scope.bienhechores[i].id)
                      donativo.nombreBienhechor=$scope.bienhechores[i].nombre+" "+$scope.bienhechores[i].apellidoPaterno;
              }
          }
      };

      colaborador.all()
          .then(function(data){
              $scope.colaboradores = data.data;
          });

      $scope.nombreColaborador=function(idColaborador,donativo){
          if($scope.colaboradores!=undefined){
              for(var i=0;i<$scope.colaboradores.length;i++){
                  if(idColaborador==$scope.colaboradores[i].id)
                      donativo.nombreColaborador=$scope.colaboradores[i].nombre+" "+$scope.colaboradores[i].apellidoPaterno;
              }
          }
      };

      $scope.seleccionarFila=function(donativo){
          $scope.existeDonativo=true;
          $scope.donativo = donativo;
      };

      $scope.filaSeleccionada = function(donativo){
          return donativo==$scope.donativo;
      };

      $scope.eliminarDonativo=function(){
          donativo.delete($scope.donativo);
          $scope.actualizarTabla();
      };

      $scope.openModal = function () {
          if(!($scope.donativo === undefined)){
              $("#myModal").modal();
              $scope.modalMessage = "¿Seguro que desea eliminar el donativo con folio  "+$scope.donativo.folioRecibo+"?";
          }
      };

      $scope.closeModal=function(){
          $("#myModal").modal('hide');
      };

      $scope.actualizarTabla=function(){
          donativo.all()
              .then(function(data){
                  $scope.donativos = data;
              });
      };
  });
