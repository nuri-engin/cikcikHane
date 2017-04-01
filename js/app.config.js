'use strict';

angular.
  module('ispinozApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/birds/ispinoz', {
        template: '<ispinoz-list></ispinoz-list>'
      }).
      when('/birds/ispinoz/:birdId', {
        template: '<ispinoz-detail></ispinoz-detail>'
      }).
      otherwise('/birds/ispinoz');
    }
  ]);

angular.
  module('guvercinApp').
  config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/birds/guvercin', {
      template: '<guvercin-list></guvercin-list>'
    }).
    when('/birds/guvercin/:birdId', {
      template: '<guvercin-detail></guvercin-detail>'
    }).
    otherwise('/birds/guvercin');
      }
    ]);

angular.
  module('serceApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/birds/serce', {
          template: '<serce-list></serce-list>'
        }).
        when('/birds/serce/:birdId', {
          template: '<serce-detail></serce-detail>'
        }).
        otherwise('/birds/serce');
    }
  ]);

angular.
  module('kuyrukApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/birds/kuyruksallayan', {
          template: '<kuyruk-list></kuyruk-list>'
        }).
        when('/birds/kuyruksallayan/:birdId', {
          template: '<kuyruk-detail></kuyruk-detail>'
        }).
        otherwise('birds/kuyruksallayan');
    }
  ]);
