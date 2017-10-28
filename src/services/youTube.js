angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.getVideo = function(query, callback) {
    var data = {
      query: query,
      maxResults: 5,
      key: YOUTUBE_API_KEY,
      chart: 'mostPopular',
      type: 'video',
      videoEmbaddable: true
    };
    $http.get('https://www.googleapis.com/youtube/v3/search',
      {
        params: data,
        type: 'json'
      }).done((response) => {
        console.log(response);
      });
  };
});
