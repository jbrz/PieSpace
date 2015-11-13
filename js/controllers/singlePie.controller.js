let SingleController = function($scope, $stateParams, PieService, $state) {
  
  // $scope.rate = 7;

  PieService.getPie($stateParams.pieId).then( (res) => {
    $scope.singlePie = res.data;
    if(res.data.description) {
      $scope.desc = res.data.description;
    }
  });

  $scope.deleteMe = function (obj) {
    PieService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };

  // $scope.max = 10;
  // $scope.isReadonly = false;

  // $scope.hoveringOver = function(value) {
  //   $scope.overStar = value;
  //   $scope.percent = 100 * (value / $scope.max);
  // };

  // $scope.ratingStates = [
  //   {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
  //   {stateOn: 'fa-star', stateOff: 'fa-start-o'},
  //   {stateOn: 'fa-heart', stateOff: 'fa-ban'},
  //   {stateOn: 'fa-heart'},
  //   {stateOff: 'fa-power-off'}
  // ];

  $scope.describeMe = function (singlePie) {
    PieService.desc(singlePie, $scope.desc).then( () => {
      alert('Description Saved');
    });
  };

};
SingleController.$inject = ['$scope', '$stateParams', 'PieService', '$state'];
export default SingleController;