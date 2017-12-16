angular.module('video-player')

.component('app', {
  controller: function() {
    this.data = exampleVideoData;
  }, 

  template: `<div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search class="search-bar">
      </div>
    </nav>

      <div class="col-md-7">
        <video-player class="video-player">
      </div>
        
      <div class="col-md-5">
        <video-list class="video-list">
      </div>
    <div>
</div>`
  
});
//not sure about ctrl.name on line 4

// <video-player><h5><em>videoPlayer</em> component goes here</h5></video-player>
// <search><h5><em>search</em> component goes here</h5></search>
// <video-list><h5><em>videoList</em> component goes here</h5></video-list>