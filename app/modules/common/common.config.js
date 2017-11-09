(function() {
    'use strict';

    var routes = [
        {
            state: 'main',
            config: {
                controller: 'MainController as vm',
                templateUrl: 'modules/common/views/main.html'
            }
        },
        {
            state: 'main.home',
            config: {
                url: '/home',
                controller: 'HomeController as vm',
                templateUrl: 'modules/common/views/home.html'
            }
        },
        {
            state: 'main.manutencao',
            config: {
                url: '/manutencao',
                controller: 'ManutencaoController as vm',
                templateUrl: 'modules/common/views/manutencao.html'
            }
        }
    ];

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        angular.forEach(routes, function(route, key){
            $stateProvider.state(route.state, route.config);
        });
        $urlRouterProvider.otherwise('/home');
    }

    angular.module('cmvc-web.common').config(config);
})();
