angular.module('video-player')

.component('videoListEntry', {
  
  bindings: {
    video: '<',
    index: '<',
    select: '<'
  },

  template: `<li class="video-list-entry media">
  <div ng-click="$ctrl.select($ctrl.index)" class="media-left">
    <img class="media-object" ng-src={{$ctrl.video.snippet.thumbnails.default.url}} alt="ridiculous necessary tag"/>
  </div>
  <div class="media-body">
    <div class="video-list-entry-title" >{{$ctrl.video.snippet.title}}</div>
    <div class="video-list-entry-detail">{{$ctrl.video.snippet.description}}</div>
  </div>
</li>
`
});
