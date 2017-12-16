angular.module('video-player')
.component('videoList', {
  
  controller: function() {
    this.videoDataArray = exampleVideoData;
    this.playSelectedVideo = function() {
      
      // change the object source of videoPlayer to be
      // the same as the clicked thumbail
      
    };
  },
  
  template: `<ul class="video-list">
    <video-list-entry
      on-click="$ctrl.playSelectedVideo"
      video="videoDataSample"
      index="$index"
      ng-repeat="videoDataSample in $ctrl.videoDataArray"
    />
    </ul>`
});



// this.VideoList = function(exampleVideoData) {
      
//       for (let i = 1; i < 5; i++) {
//         console.dir(this);
        
//         //make a video list entry
//         this['video' + i] = {};
//         this['video' + i].thumbnail = exampleVideoData[i].snippet.thumbnails.default.url;
//         this['video' + i].description = exampleVideoData[i].snippet.description;
//         this['video' + i].title = exampleVideoData[i].snippet.title;
        
//       }      
//     }; 