'use strict';

angular.
  module('kuyrukList').
    component('kuyrukList', {
      templateUrl: 'bird-list/kuyruksallayan/kuyruk-list.template.html',
    controller: ['Kuyruk',
      function KuyrukListController(Kuyruk) {
        this.birds = Kuyruk.query();
        this.orderProp = 'binominal';
      }
    ]
  }) ;
