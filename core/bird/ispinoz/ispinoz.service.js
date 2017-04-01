'use strict';

angular.
  module('coreIspinoz.ispinoz').
  factory('Ispinoz', ['$resource',
    function($resource) {
        return $resource('birds/ispinoz/:birdId.json', {}, {
          query: {
            method: 'GET',
            params: {birdId: 'ispinoz'},
            isArray: true
          }
        });
    }
  ]);
