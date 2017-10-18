(function() {
    'use strict';

    var routes = [
        {
            state: 'main.ouvidoria',
            config: {
                abstract: true,
                url: '/ouvidoria',
                template: '<ui-view/>'
            }
        },
        {
            state: 'main.ouvidoria.consulta',
            config: {
                url: '/consulta',
                controller: 'ConsultaController as vm',
                templateUrl: 'modules/ouvidoria/views/consulta.html'
            }
        },
        {
            state: 'main.ouvidoria.cadastro',
            config: {
                url: '/cadastro',
                controller: 'CadastroController as vm',
                templateUrl: 'modules/ouvidoria/views/cadastro.html'
            }
        }
    ];

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        angular.forEach(routes, function(route, key){
            $stateProvider.state(route.state, route.config);
        });
    }

    angular.module('cmvc-web.ouvidoria').config(config);
})();
