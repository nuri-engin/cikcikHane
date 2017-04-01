'use strict';

angular.
  module('coreGuvercin.guvercin').
  factory('Guvercin', ['$resource',
    function($resource) {
      return $resource('birds/guvercin/:birdId.json', {}, {
        query: {
          method: 'GET',
          params: {birdId: 'guvercin'},
          isArray: true
        }
      });
    }
  ]);
