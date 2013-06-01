'use strict';

//angular.module('openform')
openFormApp.factory('oForm', ['$resource', function($resource) {
    //var oForm = $resource('https://tjlytle.fwd.wf/form/event', {}, {
    //var oForm = $resource('https://tjlytle-fwd-wf-27y2nrna61hm.runscope.net/form/event', {}, {
    var oForm = $resource('/', {}, {
      'update': {
        method: 'PUT'
      },
      'testing': {
        method: 'POST',
        params: {test:true}
      }
    });
    return oForm;
  }])
.service('oFormService', ['oForm', '$http', function (oForm,$http) {
    //var data = prefeteched_oForms;//oForm.query();
    //var data = oForm.query();

    return {
        run:function () {
          console.log('We rollin');
        },
        save:function () {
          console.log('testing 123');
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
        },
        get:function (id) {
          var oForm;
          angular.forEach( data, function(value,key) {
            if ( value.id == id ) {
              oForm = value;
            }
          });
          return oForm;
        },
        oForms:function () {
            // This exposed private data
            return data;
        },
        saveoForm:function (oForm,method) {
          // This is a public function that modifies private data
          var inv = new oForm( oForm );
          if ( inv.id ) {
            inv.$update();
          } else {
            //inv.$save( {authenticity_token:token});
            inv.$save();
            data.push( inv );  
          }
        },
        deleteoForm:function (id) {
          angular.forEach( data, function(value,key) {
            if ( value.id == id ) {
              data.splice( key, 1 );
            }
          });
          //console.log( 'token: ' + csrf.attr('content') );
          //console.log( 'delete: ' + id );
          //oForm.delete( {oFormId: id, authenticity_token:token} );
          oForm.delete( {oFormId: id} );
        }
    };//End return
  }])
;