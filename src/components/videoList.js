angular.module('video-player')

.component('videoList', {
  
  bindings: {
    data: '<',
    select: '<'
  },
  
  controller: function() {
    this.videoDataArray = exampleVideoData;
  },
  
  template: `<ul class="video-list">
    <video-list-entry
      select="$ctrl.select"
      video="videoDataSample"
      index="$index"
      ng-repeat="videoDataSample in $ctrl.videoDataArray track by $index"
    />
    </ul>`
});
