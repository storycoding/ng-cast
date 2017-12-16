angular.module('video-player')

.component('videoPlayer', {
  
  controller: function() {
    this.data = exampleVideoData[0]; //replace this src with an object
    this.videoId = 'https://www.youtube.com/embed/' + this.data.id.videoId;
    this.videoTitle = this.data.snippet.title;
    this.videoDescription = this.data.snippet.description;
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