'use strict';
angular.module('crmWwwApp')
	.controller('LoginCtrl', function ($scope, $http, $state, $cookies) {
		$scope.user = {};
		$scope.errors = {};
		$scope.login = function (form) {
			$scope.submitted = true;
			if (form.$valid) {
				$http.post('/api/auth/login',{username:$scope.user.username,password:$scope.user.password})
					.success(function(data){
						console.log(data);
						if(data && data.status==='200')
						{
							//todo 存放时限，路径等。
							$cookies.put('token', data.token);
							$state.go('main');

						}
					})
					.error(function(e){
						console.log(e);
					});
				//Auth.login({
				//	email: $scope.user.email,
				//	password: $scope.user.password
				//})
				//	.then(function () {
				//		// Logged in, redirect to home
				//		$state.go('main');
				//	})
				//	.catch(function (err) {
				//		$scope.errors.other = err.message;
				//	});
			}
		};
	});
