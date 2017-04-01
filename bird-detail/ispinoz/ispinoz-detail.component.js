'use strict';

angular.
  module('ispinozDetail').
    component('ispinozDetail', {
      templateUrl: 'bird-detail/ispinoz/ispinoz-detail.template.html',
      controller: ['$routeParams', 'Ispinoz',
        function IspinozDetailController($routeParams, Ispinoz) {
          var self = this;
          self.bird = Ispinoz.get({birdId: $routeParams.birdId}, function(bird) {
            self.setImage(self.bird.images[0]);
          });

          self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
          };
        }
      ]
    });
