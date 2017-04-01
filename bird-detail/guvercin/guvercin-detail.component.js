'use strict';

angular.
  module('guvercinDetail').
    component('guvercinDetail', {
      templateUrl: 'bird-detail/guvercin/guvercin-detail.template.html',
      controller: ['Guvercin', '$routeParams',
        function GuvercinDetailController(Guvercin, $routeParams) {
          var self = this;
          self.bird = Guvercin.get({birdId: $routeParams.birdId}, function(bird) {
            self.setImage(self.bird.images[0]);
          });

          self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
          };
        }
      ]
    });
