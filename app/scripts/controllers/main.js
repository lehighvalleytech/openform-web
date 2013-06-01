'use strict';

//angular.module('openform')
openFormApp.controller('MainCtrl', ['$scope', 'oFormService', function ($scope, oFormService) {
    oFormService.run();
    oFormService.save();
  }]);
