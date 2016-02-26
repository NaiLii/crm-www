/**
 * Created by knix on 16/2/23.
 */
'use strict';
(function () {
	function CustomerController($scope, $http, $location) {
		$scope.customers = [];
		$scope.cloneCustomers = [];
		$scope.search = {
			keyword:''
		};
		$scope.getCustomers = function () {
			$http.get('/api/customer/my')
				.success(function (data) {
					$scope.customers = data;
					$scope.cloneCustomers = _.clone(data);
					console.log(data);
				});
		};
		$scope.getCustomers();
		$scope.showDetail = function (cid) {
			$location.url('/customer/detail/' + cid);
		};
		$scope.newCustomer = function(){
			$location.url('/customer/add');
		};
		$scope.changeWord = function(){
			var key = $scope.search.keyword.trim();
			if(key){
				$scope.customers = $scope.cloneCustomers.filter(function (x) {
					return x.name.indexOf(key)>-1;
				});
			}else{
				$scope.customers = _.clone($scope.cloneCustomers);
			}
		};
	}

	angular.module('crmWwwApp')
		.controller('CustomerController', CustomerController);
})();
