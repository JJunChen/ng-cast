angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    item: '<',
    index: '<'
  },
  controller: function() {
    
    // console.log($ctrl.item);
    console.log(this.index); 
  },
  // TODO
  templateUrl: 'src/templates/videoListEntry.html' 
});
