'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

  // nothing to see here for now… state transitions happening with ui-sref!
  	PlaylistFactory.fetchAll()
  	.then(function(playlists){
  		$scope.playlists = playlists;
  	})
  	.catch(function(err){
  		console.log(err);
  	})


});

  juke.config(function ($stateProvider) {
  
  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/playlist-form.html'
  });

  $stateProvider.state('playlistSingle', {
    url: '/playlists/:id',
    templateUrl: '/js/playlist/playlist.single.html',
    controller: 'PlaylistSingleCtrl',
    resolve: {
    	theplaylist: function(PlaylistFactory, $stateParams){
    		return PlaylistFactory.fetchById($stateParams.id);
    	}
    }
  });



});
