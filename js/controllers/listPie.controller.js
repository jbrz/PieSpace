let ListController = function($scope, PARSE, $http, PieService) {
  

  PieService.getPies().then ( (res) => {
    console.log($scope.pies);
    $scope.pies = res.data.results;
  });
};

ListController.$inject = ['$scope', 'PARSE', '$http', 'PieService'];

export default ListController;