(function() {
    'use strict';

    consultaController.$inject = ['messageService'];
    function consultaController(messageService) {
        var vm = this;

        vm.messages = [];

        _init();

        ///// Function /////
        function _init(){
            messageService
                .getMessages()
                .then(function(messages) {
                    vm.messages = messages;
                    console.log(messages);
                });
        }
    }

    angular.module('cmvc-web.ouvidoria').controller('ConsultaController', consultaController);
})();
