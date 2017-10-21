(function() {
    'use strict';

    cadastroController.$inject = ['messageService'];
    function cadastroController(messageService) {
        var vm = this;

        vm.message = {};

        vm.sendMessage = sendMessage;

        ///// Function /////
        function sendMessage() {
            messageService.sendMessage(vm.message)
                .then(function() {
                    alert('Mensagem enviada!');
                });
        }
    }

    angular.module('cmvc-web.ouvidoria').controller('CadastroController', cadastroController);
})();
