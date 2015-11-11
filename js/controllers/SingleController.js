let SingleController = function($scope, $stateParams, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/pie/' + $stateParams.pieId;

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.singlePies = res.data;

  });

};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;