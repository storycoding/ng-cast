angular.module('video-player')

.component('app', {
  
  controller: function() {
    this.data = exampleVideoData; // this data will be changed with the api requests
    this.selectedVideo = this.data[0]; //
    console.log('app selected video = ', this.selectedVideo);
    
    
    this.select = (clickedVideo) => {
      console.log('clickedVideo = ' + clickedVideo);
      console.log('clicked');
      console.log('this.selectedVideo = ' + this.selectedVideo);
      this.selectedVideo = clickedVideo;
      console.log('this.selectedVideo = ' + this.selectedVideo);
    };
    
  }, 


  template: `<div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search class="search-bar">
      </div>
    </nav>
      <div class="col-md-7">
        <video-player class="video-player" video=$ctrl.selectedVideo>
      </div> 
      <div class="col-md-5">
        <video-list class="video-list" ng-click="$ctrl.select($ctrl.index)" >
      </div>
    <div>
</div>`
  
});