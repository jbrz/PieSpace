let MusicController = function($scope, SC, $http, $sce) {
  
  let url = 'https://api.soundcloud.com/users/8869662/playlists?client_id=' + SC;

  $http.get(url).then( (res) => {
    $scope.songs = res.data;
  });

  $scope.playMe = (song) => {
    $scope.audio = $sce.trustAsResourceUrl(song.stream_url + '?client_id=' + SC);
    $scope.playing = song;
  };
};

MusicController.$inject = ['$scope', 'SC', '$http', '$sce'];

export default MusicController;