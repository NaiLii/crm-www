
'use strict';
(function () {
	function CustomerAddController($scope, $http, $state) {

		$scope.customer = {};
		$scope.saveCustomer = function(){
			$http.post('/api/customer/add', $scope.customer)
				.success(function(){
					$state.go('customer');
				})
				.error(function(e){
					console.log(e);
				});
		};
	}

	angular.module('crmWwwApp')
		.controller('CustomerAddController', CustomerAddController);
})();
