angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<'
  },
  controller: function() {  
    this.onClick = (video) => {
      this.selectVideo(video);
    }; 
  },
  // TODO
  templateUrl: 'src/templates/videoList.html' 
});
