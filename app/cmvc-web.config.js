(function() {
    'use strict';

    config.$inject = ['$locationProvider'];
    function config($locationProvider) {
        // Remove '#' from URL
        $locationProvider.html5Mode(true);
    }

    angular.module('cmvc-web').config(config);
})();
