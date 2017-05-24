'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:AportacionCtrl
 * @description
 * # AportacionCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
  .controller('AportacionCtrl', function (aportacion, $scope, bienhechor) {
      
      $scope.existeAportacion=false;
      aportacion.all()
          .then(function(data){
              $scope.aportaciones = data;
          });

      bienhechor.all()
          .then(function(data){
              $scope.bienhechores = data.data;
          });

      $scope.nombreBienhechor=function(idBienhechor){
          if($scope.bienhechores!=undefined){
              for(var i=0;i<$scope.bienhechores.length;i++){
                  if(idBienhechor==$scope.bienhechores[i].id)
                      return $scope.bienhechores[i].nombre+" "+$scope.bienhechores[i].apellidoPaterno;
              }
          }
      };

      $scope.seleccionarFila=function(aportacion){
          $scope.existeAportacion=true;
          $scope.aportacion = aportacion;
      };

      $scope.filaSeleccionada = function(aportacion){
          return aportacion==$scope.aportacion;
      };

      $scope.eliminarAportacion=function(){
          aportacion.delete($scope.aportacion);
          $scope.actualizarTabla();
      };

      $scope.openModal = function () {
          if(!($scope.aportacion === undefined)){
              $("#myModal").modal();
              $scope.modalMessage = "¿Seguro que desea eliminar a la aportación con monto "+$scope.aportacion.monto+"?";
          }
      };

      $scope.closeModal=function(){
          $("#myModal").modal('hide');
      };

      $scope.actualizarTabla=function(){
          aportacion.all()
              .then(function(data){
                  $scope.aportaciones = data;
              });
      };
      
  });
