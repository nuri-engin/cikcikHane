'use strict';

angular.
  module('guvercinList').
    component('guvercinList', {
      templateUrl: 'bird-list/guvercin/guvercin-list.template.html',
      controller: ['Guvercin',
       function GuvercinListController(Guvercin) {
        this.birds = Guvercin.query();
        this.orderProp = 'binominal';
    }
  ]
  });
