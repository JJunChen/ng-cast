angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(query, callback) {
    var data = {
      q: query,
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyBugf5SoU1OXxy5gnvjg8wumN3CNPIbOPg',
      chart: 'mostPopular',
      type: 'video',
      videoEmbaddable: true
    };
    $http.get('https://www.googleapis.com/youtube/v3/search',
      {
        params: data,
        type: 'json'
      }).then((response) => {
        callback(response);
      });
  };
});
