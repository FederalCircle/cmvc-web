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
                url: '/',
                controller: 'HomeController as vm',
                templateUrl: 'modules/common/views/home.html'
            }
        },
        {
            state: 'main.ouvidoria',
            config: {
                url: '/ouvidoria',
                controller: 'OuvidoriaController as vm',
                templateUrl: 'modules/common/views/ouvidoria.html'
            }
        }
    ];

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        angular.forEach(routes, function(route, key){
            $stateProvider.state(route.state, route.config);
        });
        $urlRouterProvider.otherwise('/');
    }

    angular.module('cmvc-web.common').config(config);
})();
