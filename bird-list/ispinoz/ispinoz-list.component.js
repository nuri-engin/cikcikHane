'use strict';

angular.
  module('ispinozList').
    component('ispinozList', {
      templateUrl: 'bird-list/ispinoz/ispinoz-list.template.html',
      controller: ['Ispinoz',
      function IspinozListController(Ispinoz) {
        this.birds = Ispinoz.query();
        this.orderProp = 'binominal';
      }
    ]
  });
