'use strict';

juke.factory('SongFactory', function ($http) {

  return {
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song.id + '/audio';
      return song;
    },
    getAll: function(){
    	return $http.get('/api/songs')
    	.then(function(response){
    		console.log(response.data);
    		return response.data;
    	});
    }
  };

});

