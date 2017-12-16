angular.module('video-player')

.component('videoPlayer', {
  
  bindings: {
    currentVideo: '<'
  },
  
  controller: function() {
    
    this.$onInit = function() {
      this.videoId = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
      this.videoTitle = this.currentVideo.snippet.title;
      this.videoDescription = this.currentVideo.snippet.description;
    };
  },
  
  template: `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={{$ctrl.videoId}} allowFullScreen></iframe>
      </div>
    <div class="video-player-details">
      <h3>{{$ctrl.videoTitle}}</h3>
      <div>{{$ctrl.videoDescription}}</div>
    </div>
  </div>
  `
});

