'use strict';

openForm.controller('MainCtrl', ['$scope','$http','api', function ($scope,$http,api) {
    $scope.submitForm = function () {
        console.log('submitting form');
        //window.location = 'http://youtu.be/oHg5SJYRHA0';
        //MARK, DO SOMETHING CLEVER HERE
        //return false;

        var form = {};
        form.specialEventApplication = {};
        form.specialEventApplication.applicant = {};
        form.specialEventApplication.applicant.name = 'Charles';
        //form = $.param(form);

        var encodedForm = encodeURIComponent(JSON.stringify(form));

        $scope.data = api.post(encodedForm);

        console.log($scope.data);

//      $http({
//        method: 'POST',
//        url: 'http://of.bytecost.com/form/event/',
//        data: form,
//        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//      });
    };

    $scope.printForm = function () {
        //$scope.data = api.get('')
        window.open('http://of.bytecost.com/form/event/a805a8a73a748ca71d528a69b192ebd4?format=pdf');
    }
}]);
