
'use strict';

angular.module('crmWwwApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('customerdetail', {
				url: '/customer/detail/{cid}',
				templateUrl: 'app/customer/detail/detail.html',
				controller: 'CustomerDetailController',
				controllerAs: 'customerdetail'
			});
	});
