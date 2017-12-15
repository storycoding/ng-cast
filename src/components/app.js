angular.module('video-player')

.component('video', {
  template: '<div>: {{$ctrl.name}}</div>',
  bindings: {
    name:'videoPlayer'
  }
});
//not sure about ctrl.name on line 4