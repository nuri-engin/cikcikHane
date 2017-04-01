'use strict';

angular.
  module('coreSerce.serce').
  factory('Serce', ['$resource',
    function($resource) {
      return $resource('birds/serce/:birdId.json', {}, {
        query: {
          method: 'GET',
          params: {birdId: 'serce'},
          isArray: true
        }
      });
    }
  ]);
