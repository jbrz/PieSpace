let ListController = function($scope, PieService) {
  

  PieService.getPies().then ( (res) => {
    $scope.pies = res.data.results;
  });
  console.log($scope.pies);
};

ListController.$inject = ['$scope', 'PieService'];

export default ListController;