'use strict';

var openFormApp = angular.module('openform', ['ngResource'])
  .config(['$httpProvider', '$routeProvider', function ($httpProvider,$routeProvider) {
    //CORS nonsense
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
