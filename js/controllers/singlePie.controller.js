let SingleController = function($scope, $stateParams, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/Pies' + $stateParams.pieId;

  $http.get(url, PARSE.CONFIG).then( (res) => {
    console.log(res.data.results);
    $scope.singlePie = res.data.results;

  });

};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;