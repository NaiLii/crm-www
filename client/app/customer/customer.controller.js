/**
 * Created by knix on 16/2/23.
 */
'use strict';
(function () {
	function CustomerController($scope, $http) {

		$scope.customers = [];

		$scope.getCustomers = function(){
			$http.get('/api/customer/my')
				.success(function(data){
					$scope.customers = data;
				});
		};

		$scope.getCustomers();
	}

	angular.module('crmWwwApp')
		.controller('CustomerController', CustomerController);
})();
