angular.module('video-player')
.component('videoList', {
  
  controller: function() {
    this.videoDataArray = exampleVideoData;
    this.playSelectedVideo = function() {
      
      // change the object source of videoPlayer to be
      console.log('video elements clicked!');
      console.log(video);
      // the same as the clicked thumbail
      
      
    };
  },
  
  template: `<ul class="video-list">
    <video-list-entry
    playSelectedVideo="$ctrl.playSelectedVideo"
     ng-click="$ctrl.playSelectedVideo()"
      video="videoDataSample"
      index="$index"
      ng-repeat="videoDataSample in $ctrl.videoDataArray"
    />
    </ul>`
});
