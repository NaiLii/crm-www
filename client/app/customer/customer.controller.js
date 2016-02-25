/**
 * Created by knix on 16/2/23.
 */
'use strict';
(function () {
	function CustomerController($scope, $http, $location) {
		$scope.customers = [];
		$scope.getCustomers = function () {
			$http.get('/api/customer/my')
				.success(function (data) {
					$scope.customers = data;
				});
		};
		$scope.getCustomers();
		$scope.showDetail = function (cid) {
			$location.url('/customer/detail/' + cid);
		};
	}

	angular.module('crmWwwApp')
		.controller('CustomerController', CustomerController);
})();
