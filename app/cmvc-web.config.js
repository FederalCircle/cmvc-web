(function() {
    'use strict';

    config.$inject = ['$locationProvider', 'settings'];
    function config($locationProvider, settings) {
        // Remove '#' from URL
        $locationProvider.html5Mode(settings.html5Mode);
    }

    angular.module('cmvc-web').config(config);
})();
