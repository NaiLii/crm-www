'use strict';

angular.module('crmWwwApp')
	.controller('NavFooterCtrl', function ($scope, $state) {
		$scope.go = function(state){
			$state.go(state);
		}

	});
