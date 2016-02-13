(function (angular) {

  'use strict';

  angular.module('betsol.module', [])

    .provider('service', function () {
      var service = {};
      var provider = {
        $get: function () {
          return service;
        }
      };
      return provider;
    })

  ;

})(angular);
