'use strict';

angular.module('crmWwwApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('birthday', {
				url: '/birthday',
				templateUrl: 'app/birthday/birthday.html',
				controller: 'BirthdayController',
				controllerAs: 'birthday'
			});
	});
