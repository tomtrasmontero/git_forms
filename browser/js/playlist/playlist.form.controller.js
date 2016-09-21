'use strict';

//playlists
juke.controller('PlaylistCtrl', function($scope, PlaylistFactory,$state){

	// $scope.playlist;

	$scope.create = function(playlist){
		var playlistObj = {
			name: playlist
		};

		PlaylistFactory.create(playlistObj)
		.then(function(result){
			console.log('created list' + result);
			$scope.playlist = "";
			$state.go('playlistSingle', {id: result.id});
			return result;
		})
		.catch(function(err){
			console.log(err)
		})
	}


});

//playlist
juke.controller('PlaylistSingleCtrl', function($scope, PlaylistFactory, SongFactory, theplaylist){

	$scope.playlist = theplaylist;
	SongFactory.getAll()
	.then(function(songs){
		$scope.allSongs = songs;
	});

	$scope.addSong = function(id){
		PlaylistFactory.addSong(id)
		.then(function(songs){
			$scope.playlist = songs;
		})
	}



});