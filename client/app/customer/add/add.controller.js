
'use strict';
(function () {
	function CustomerAddController($scope, $http) {

		$scope.customer = {};
		$scope.saveCustomer = function(){
			$http.post('/api/customer/add', $scope.customer)
				.success(function(){
					console.log('保存成功');
				})
				.error(function(e){
					console.log(e);
				});
		};
	}

	angular.module('crmWwwApp')
		.controller('CustomerAddController', CustomerAddController);
})();
