
'use strict';

angular.module('crmWwwApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('customeredit', {
				url: '/customer/edit/{cid}',
				templateUrl: 'app/customer/edit/edit.html',
				controller: 'CustomerEditController',
				controllerAs: 'customeredit'
			});
	});
