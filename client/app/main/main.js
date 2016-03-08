'use strict';

angular.module('crmWwwApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/customer/customer.html',
        controller: 'CustomerController',
        controllerAs: 'main'
      });
  });
