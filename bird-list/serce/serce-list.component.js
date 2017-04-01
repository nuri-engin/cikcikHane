'use strict';

angular.
  module('serceList').
    component('serceList', {
      templateUrl: 'bird-list/serce/serce-list.template.html',
      controller: ['Serce',
       function SerceListController(Serce) {
          this.birds = Serce.query();
          this.orderProp = 'binominal';
        }
      ]
    });
