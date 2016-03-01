/**
 * Created by knix on 16/2/23.
 */
'use strict';
(function () {
	function CustomerController($scope, $http, $location) {
		$scope.customers = [];
		$scope.cloneCustomers = [];
		$scope.search = {
			keyword: ''
		};
		$scope.customerList = {};
		var arr = [];
		$scope.getCustomers = function () {
			$http.get('/api/customer/my')
				.success(function (data) {
					$scope.customers = data;
					$scope.cloneCustomers = _.clone(data);
					console.log(data);
					$scope.customers.forEach(function (c) {
						var letter = c.letter.substring(0, 1).toUpperCase();
						var pos = _.findIndex(arr, function (d) {
							return d.letter === letter;
						});
						if (pos > -1) {
							arr[pos].list.push(c);
						}
						else {
							var doc = {
								letter: letter,
								list: []
							};
							doc.list.push(c);
							arr.push(doc);
						}
						//c.group = letter;
						//if ($scope.customerList[letter]) {
						//	$scope.customerList[letter].push(c);
						//} else {
						//	$scope.customerList[letter] = [];
						//	$scope.customerList[letter].push(c);
						//}
					});
					$scope.customerList = arr;
					$scope.customerList.sort(function(a,b){return a.letter> b.letter;});
				});
		};
		$scope.getCustomers();
		$scope.showDetail = function (cid) {
			$location.url('/customer/detail/' + cid);
		};
		$scope.newCustomer = function () {
			$location.url('/customer/add');
		};
		$scope.changeWord = function () {
			var key = $scope.search.keyword.trim();
			if (key) {
				$scope.customers = $scope.cloneCustomers.filter(function (x) {
					return x.name.indexOf(key) > -1;
				});
			} else {
				$scope.customers = _.clone($scope.cloneCustomers);
			}
		};
	}

	angular.module('crmWwwApp')
		.controller('CustomerController', CustomerController);
})();
