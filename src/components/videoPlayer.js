angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    this.data = exampleVideoData;
    this.videoId = 'https://www.youtube.com/embed/' + this.data[0].id.videoId;
  },
  template: `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={{$ctrl.videoId}} allowFullScreen></iframe>
      </div>
    <div class="video-player-details">
      <h3>Video Title</h3>
      <div>Video Description</div>
    </div>
  </div>
  `
});


// var VideoPlayer = (props) => {
  
//     //var videoPlayer = this.props.videoPlayer;
//     //var iframe = this.props.iframe;

//   var thumbnail = props.video.snippet.thumbnails.default.url;
//   var videoId = 'https://www.youtube.com/embed/' + props.video.id.videoId;
//   var description = props.video.snippet.description;
//   var title = props.video.snippet.title;

//   return (
//     <div className="video-player">
//       <div className="embed-responsive embed-responsive-16by9">
//         <iframe className="embed-responsive-item" src={videoId} allowFullScreen></iframe>
//       </div>
//       <div className="video-player-details">
//         <h3>{title}</h3>
//         <div>{description}</div>
//       </div>
//     </div>
//   );
// };

