openForm.factory('api', function ($http, $q) {
    return {
        post: function (form) {
            var deferred = $q.defer();
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            $http.post('http://of-bytecost-com-gxpui81i4wzr.runscope.net/form/event',form,{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}).success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                    deferred.reject();
                });

            return deferred.promise;
        },
        get: function(id) {
            //            var deferred = $q.defer();
            //            var config = {
            //                headers: {
            //                    'Content-Type': 'application/pdf'
            //                }
            //            };
            //            $http.get('http://of.bytecost.com/form/event/'+id+'?format=pdf',config).success(function (data) {
            //                console.log(data);
            //                deferred.resolve(data);
            //            }).error(function () {
            //                    deferred.reject();
            //                });
            //            return deferred.promise;
        }
    }
});