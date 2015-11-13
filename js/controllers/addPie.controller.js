let AddController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/Pies';

  let Pie = function (obj) {
    this.name = obj.name;
    this.parts = obj.parts;
    this.hasTried = false;
    this.description = obj.desc;
    this.image = this.URL;
  };

  $scope.addPie = (obj) => {
    let p = new Pie(obj);

    $http.post(url, p, PARSE.CONFIG).then( (res) => {
      $scope.pie = {};
    });

  };

};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;