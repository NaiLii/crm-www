/**
 * Created by knix on 16/2/23.
 */
'use strict';
(function () {
	function CustomerController($scope, $http, $location) {
		$scope.customers = [];
		$scope.originCustomers = [];
		$scope.search = {
			keyword: ''
		};
		$scope.pageCustomers = {};
		function getlist(data, keyword) {
			var arr = [];
			data.forEach(function (c) {
				var include = c.letter.indexOf(keyword) > -1 || c.name.indexOf(keyword) > -1;
				if ((keyword && include) || !keyword) {
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
				}
			});
			arr.sort(function (a, b) {
				return a.letter > b.letter;
			});
			$scope.pageCustomers = arr;
		}

		$scope.getCustomers = function () {
			$http.get('/api/customer/my')
				.success(function (data) {
					$scope.originCustomers = _.clone(data);
					getlist(data, '');
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
			getlist($scope.originCustomers, key);
		};
	}

	angular.module('crmWwwApp')
		.controller('CustomerController', CustomerController);
})();
