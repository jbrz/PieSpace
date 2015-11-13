let ListController = function($scope, PARSE, $http, PieService) {
  


  PieService.getPies().then ( (res) => {
    $scope.pies = res.data.results;
    console.log($scope.pies);
  });
};

ListController.$inject = ['$scope', 'PARSE', '$http', 'PieService'];

export default ListController;