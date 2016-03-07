'use strict';
(function () {
	function BirthdayController($scope, $http) {
		$scope.customers = [];
		$http.get('/api/birthday/will')
			.success(function (data) {
				console.log(data);
				data.sort(function (a, b) {
					return a.happyDay > b.happyDay;
				});
				$scope.customers = data;
			})
			.error(function (e) {
				console.log(e);
			});
	}

	angular.module('crmWwwApp')
		.controller('BirthdayController', BirthdayController);
})();
