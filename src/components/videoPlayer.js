angular.module('video-player')

.component('videoPlayer', {
  
  bindings: {
    video: '<' // consider = for two way binding // easy updating
  },
  
  controller: function() {
    console.log(this);
    
    this.videoUrl = function() {
      console.log(this);
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    };
    
  },
  
  template: `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={{$ctrl.videoUrl()}} allowFullScreen></iframe>
      </div>
    <div class="video-player-details">
      <h3>{{$ctrl.video.snippet.title}}</h3>
      <div>{{$ctrl.video.snippet.description}}</div>
    </div>
  </div>
  `
});

