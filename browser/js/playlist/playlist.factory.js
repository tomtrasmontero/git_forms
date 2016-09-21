'use strict';

juke.factory('PlaylistFactory', function($http){

  var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  PlaylistFactory.fetchById = function (id) {
  	var url = '/api/playlists/' + id;
  	return $http.get(url)
  	  .then(function(result){
  	  	console.log('by id' + result.data);
  	  	return result.data;
  	  });
  }

  PlaylistFactory.addSong = function (id) {
  	var url = '/api/playlists/' + id + '/songs';
  	return $http.post(url)
  	.then(function(result){
  		return result.data;
  	})
  }


  return PlaylistFactory;


});