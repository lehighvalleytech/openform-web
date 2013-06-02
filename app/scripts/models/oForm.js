'use strict';

openForm.service('oFormService', ['oForm', '$http', function (oForm,$http) {

    return {
        saveForm:function (oForm,method) {
          // This is a public function that modifies private data
          var inv = new oForm( oForm );
          if ( inv.id ) {
            inv.$update();
          } else {
            //inv.$save( {authenticity_token:token});
            inv.$save();
            data.push( inv );  
          }
        }
    };//End return
  }])
;