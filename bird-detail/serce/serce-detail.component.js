'use strict';

angular.
  module('serceDetail').
    component('serceDetail', {
      templateUrl: 'bird-detail/serce/serce-detail.template.html',
      controller: ['$routeParams', 'Serce',
        function SerceDetailController($routeParams, Serce) {
          var self = this;
          self.bird = Serce.get({birdId: $routeParams.birdId}, function(bird) {
            self.setImage(self.bird.images[0]);
          });

          self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
          };
        }
      ]
    });
