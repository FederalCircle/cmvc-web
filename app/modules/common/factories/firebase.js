(function() {
	'use strict';

	function factory() {
		var factory = {
			ref: ref
		};

		///// Functions /////
		function ref(base) {
			return firebase.database().ref(base);
		}
	}

	angular.module('cmvc-web.common').factory('firebaseFactory', factory);
})();