'use strict';

angular.
  module('kuyrukDetail').
    component('kuyrukDetail', {
      templateUrl: 'bird-detail/kuyruksallayan/kuyruk-detail.template.html',
      controller: ['Kuyruk', '$routeParams',
        function KuyrukDetailController(Kuyruk, $routeParams) {
          var self = this;
          self.bird = Kuyruk.get({birdId: $routeParams.birdId}, function(bird) {
            self.setImage(bird.images[0]);
          });

          self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
          };
        }
      ]
    });
