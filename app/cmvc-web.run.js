(function() {
    'use strict';

    run.$inject = ['settings'];
    function run(settings) {
        // Initialize Firebase
        firebase.initializeApp(settings.firebase);
    }

    angular.module('cmvc-web').run(run);
})();
