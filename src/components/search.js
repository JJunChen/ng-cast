angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<'
  },
  controller: function() {
    this.searchQ = '';
    this.onSearchClick = () => {
      this.result(this.searchQ);
    };
  },
  templateUrl: 'src/templates/search.html' 
});
