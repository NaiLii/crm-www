/**
 * Created by knix on 16/2/23.
 */
'use strict';

angular.module('crmWwwApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('customer', {
				url: '/customer',
				templateUrl: 'app/customer/customer.html',
				controller: 'CustomerController',
				controllerAs: 'customer'
			});
	});
