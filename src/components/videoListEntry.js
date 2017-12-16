angular.module('video-player')
.component('videoListEntry', {
  
  bindings: {
    video: '<',
    index: '<'
  },
  
  //replace exampleVideoData[1] with data sent from parent
  // controller: function() {
  //   console.dir(this);
  //   this.thumbnail = this.video.snippet.thumbnails.default.url;
  //   this.description = this.video.snippet.description;
  //   this.title = this.video.snippet.title;
  // }, 
  
  template: `<li class="video-list-entry media">
  <div class="media-left">
    <img class="media-object" ng-src={{$ctrl.video.snippet.thumbnails.default.url}} alt="ridiculous necessary tag"/>
  </div>
  <div class="media-body">
    <div class="video-list-entry-title">{{$ctrl.video.snippet.title}}</div>
    <div class="video-list-entry-detail">{{$ctrl.video.snippet.description}}</div>
  </div>
</li>
`
});
