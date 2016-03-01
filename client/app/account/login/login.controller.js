'use strict';
angular.module('crmWwwApp')
	.controller('LoginCtrl', function ($scope, $http, $state, $cookies) {
		$scope.user = {};
		$scope.errors = {};
		$scope.login = function (form) {
			$scope.submitted = true;
			if (form.$valid) {
				var doc = {
					username: $scope.user.username,
					password: $scope.user.password
				};
				$http.post('/api/auth/login', doc)
					.success(function (data) {
						console.log(data);
						if (data && data.status === '200') {
							//todo 存放时限，路径等。
							$cookies.put('token', data.token);
							$state.go('main');
						}
					})
					.error(function (e) {
						console.log(e);
					});
			}
		};
	});
