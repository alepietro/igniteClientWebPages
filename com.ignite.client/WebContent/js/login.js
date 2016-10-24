(function() {
	'use strict';

	angular.module('app').controller('loginController', loginController);

	loginController.$inject = [ '$rootScope', '$scope', 'listFactory',
			'infoService' ];

	/* @ngInject */
	function loginController($rootScope, $scope, listFactory, infoService) {
		var vm = this;
		var token = $rootScope.token;
		$scope.name = infoService.getName;

		// //////////////

		$scope.signFile = function() {
			var fileId = getMessage
		};
	}
})();