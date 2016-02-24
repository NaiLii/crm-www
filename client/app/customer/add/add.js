
'use strict';

angular.module('crmWwwApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('customeradd', {
				url: '/customer/add',
				templateUrl: 'app/customer/add/add.html',
				controller: 'CustomerAddController',
				controllerAs: 'customeradd'
			});
	});
