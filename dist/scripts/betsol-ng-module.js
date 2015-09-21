/**
 * betsol-ng-module - A template project for Angular.js modules
 * @version v0.0.0
 * @link https://github.com/betsol/ng-module
 * @license MIT
 *
 * @author Slava Fomin II <s.fomin@betsol.ru>
 */
(function (window, angular) {

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

})(window, angular);
