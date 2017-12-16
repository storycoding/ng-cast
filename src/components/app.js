angular.module('video-player')

.component('app', {
  controller: function() {
    this.data = exampleVideoData;
    this.currentVideo = this.data[0]; // this is good
    this.select = function(target) {
      this.currentVideo = target;
    };
  }, 


  template: `<div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search class="search-bar">
      </div>
    </nav>
      <div class="col-md-7">
        <video-player class="video-player" current-video="$ctrl.currentVideo">
      </div> 
      <div class="col-md-5">
        <video-list class="video-list">
      </div>
    <div>
</div>`
  
});