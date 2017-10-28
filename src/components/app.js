angular.module('video-player')

.component('app', {
 
  controller: function() {
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = () => {
      
    };
  },
  // TODO
  templateUrl: 'src/templates/app.html' 
}



);
