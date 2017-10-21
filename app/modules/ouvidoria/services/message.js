(function() {
    'use strict';

    messageService.$inject = ['$q', '$firebaseArray', 'firebaseFactory'];
    function messageService($q, $firebaseArray, firebaseFactory) {
        var ref = firebaseFactory.ref('messages');
        var messages = [];
        var service = {
            getMessages: getMessages,
            sendMessage: sendMessage
        };
        
        return service;

        ///// Functions /////
        function getMessages() {
            var deferred = $q.defer();
            // If theres no messages loaded
            if( angular.equals(messages, []) ) {
                // Returns the promise of updated messages
                return _syncMessages();
            } else {
                // Return the cached messages
                deferred.resolve(messages);
            }

            return deferred.promise;
        }

        function sendMessage(newMessage) {
            var deferred = $q.defer();

            _syncMessages()
                .then(function() {
                    messages
                        .$add(newMessage)
                        .then(function() {
                            deferred.resolve();
                        });
                });

            return deferred.promise;
        }

        function _syncMessages() {
            var deferred = $q.defer();

            messages = $firebaseArray(ref);
            messages
                .$loaded(function() {
                    deferred.resolve(messages);
                });

            return deferred.promise;
        }
    }

    angular.module('cmvc-web.ouvidoria').service('messageService', messageService);
})();