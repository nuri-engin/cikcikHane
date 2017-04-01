'use strict';

angular.
  module('coreKuyruk.kuyruk').
  factory('Kuyruk', ['$resource',
    function($resource) {
      return $resource('birds/kuyruksallayan/:birdId.json', {}, {
        query: {
          method: 'GET',
          params: {birdId: 'kuyruksallayan'},
          isArray: true
        }
      });
    }
  ]);
