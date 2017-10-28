angular.module('video-player')

.component('search', {
  // TODO
  controller: function() {
    this.searchClick = () => {
      console.log('clicked');
      getVideo();
    };
  },
  templateUrl: 'src/templates/search.html' 
});
