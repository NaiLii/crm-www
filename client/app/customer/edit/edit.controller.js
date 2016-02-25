'use strict';
(function () {
	function CustomerEditController($scope, $http, $stateParams, $filter, $location) {
		var cid = $stateParams.cid;
		$scope.customer = {};
		$http.get('/api/customer/detail/' + cid)
			.success(function (data) {
				$scope.customer = data;
				$filter('dateformat')($scope.customer);
			});
		$scope.save = function () {
			$http.put('/api/customer/update', $scope.customer)
				.success(function () {
					$location.url('/customer/detail/' + $scope.customer.id);
				});
		};
	}

	angular.module('crmWwwApp')
		.controller('CustomerEditController', CustomerEditController);
})();
