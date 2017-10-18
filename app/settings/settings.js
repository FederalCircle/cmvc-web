(function() {
    'use strict';

    var settings = {
        html5Mode: false,
        firebase: {
            apiKey: "AIzaSyCmVWi4uVil3ncRK-_rvHPfoqw8UlLd2Qc",
            authDomain: "cmvc-5d2b5.firebaseapp.com",
            databaseURL: "https://cmvc-5d2b5.firebaseio.com",
            projectId: "cmvc-5d2b5",
            storageBucket: "cmvc-5d2b5.appspot.com",
            messagingSenderId: "532946281654"
        }
    };

    angular.module('cmvc-web').constant('settings', settings);
})();