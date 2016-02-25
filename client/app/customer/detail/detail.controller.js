'use strict';
(function () {
	function CustomerDetailController($scope, $http, $stateParams) {
		var cid = $stateParams.cid;
		$scope.customer = {};
		$http.get('/api/customer/detail/' + cid)
			.success(function (data) {
				$scope.customer = data;
				console.log($scope.customer);
			});
	}

	angular.module('crmWwwApp')
		.controller('CustomerDetailController', CustomerDetailController);
})();
