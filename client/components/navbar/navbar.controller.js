'use strict';

angular.module('crmWwwApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.menu = [{
      'title': '我的客户',
      'state': 'customer'
    },{
      'title': '即将生日',
      'state': 'birthday'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
