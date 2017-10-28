angular.module('video-player')

.component('app', {
 
  controller: function(youTube) {
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (query) => {
      youTube.search(query, (response) => {
        this.currentVideo = response.data.items[0];
        this.videos = response.data.items;
      });
      
    };
    // youTube.search('', (response) => {
    //   this.currentVideo = response.data.items[0];
    //   this.videos = response.data.items;
    // });
    // this.$onInit = function() {
    //   this.searchResults();
    // };
    
  },
  // TODO
  templateUrl: 'src/templates/app.html' 
});
