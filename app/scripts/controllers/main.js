'use strict';

openFormApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.submitForm = function() {
      console.log('submitting form');
      window.location = 'http://youtu.be/oHg5SJYRHA0';
      //MARK, DO SOMETHING CLEVER HERE
      return false;

      var frm = {};
      frm.specialEventApplication = {};
      frm.specialEventApplication.applicant = {};
      frm.specialEventApplication.applicant.name = 'Charles';
      frm = $.param( frm );

      $http({
        method: 'POST',
        url: 'https://tjlytle.fwd.wf/form/event',
        data: frm,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
    }
  }]);
