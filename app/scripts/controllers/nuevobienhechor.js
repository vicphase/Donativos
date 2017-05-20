'use strict';

/**
 * @ngdoc function
 * @name donativosApp.controller:NuevobienhechorCtrl
 * @description
 * # NuevobienhechorCtrl
 * Controller of the donativosApp
 */
angular.module('donativosApp')
    .controller('NuevobienhechorCtrl', function (bienHechores, $scope) {

        $scope.bienHechor = {
            frecuenciaDonativo:" ",
            metodoAportacion:" ",
            zona:" ",
            sector:" "
        };
        $scope.agregarBienHechor = function () {
            bienHechores.post($scope.bienHechor);
        };


        $scope.openModal = function () {
            if($scope.formValidate('myForm')){
                $("#editModal").modal();
                $scope.modalMessage = "¿Seguro que desea añadir a "+$scope.bienHechor.nombre
                    +" "+$scope.bienHechor.apellidoPaterno
                    +" "+$scope.bienHechor.apellidoMaterno+"?";
            }
        };

        $scope.openCancelModal = function () {
            if(!($scope.bienHechor === undefined)){
                $("#cancelModal").modal()
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
