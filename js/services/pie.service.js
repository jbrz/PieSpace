let PieService = function(PARSE, $http) {

  let url = PARSE.URL + 'classes/Pies';

  let checkAuth = function () {
    return true;
  };

  this.getPies = function () {
    if (checkAuth()){     
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  this.getPie = function (pieId) {
    if (checkAuth()){      
      return $http({
        method: 'GET',
        url: url + '/' + pieId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
    }
  };

  let Pie = function (obj) {
    this.name = obj.name;
    this.parts = obj.parts;
    this.hasTried = false;
    this.description = obj.desc;
    this.image = this.URL;
  };

  this.addPie = function (obj) {
    let p = new Pie(obj);
    return $http.post(url, w, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

  this.rate = function (obj, desc) {
    obj.desc = desc;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  // Flickr Pictures 
  // let flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=';
  // let flickrAPI = '&format=json&nojsoncallback=1&api_key=57c877e8365ae62778a875778fe29243';
  // let query = pies.Name;

  // this.getflickrURL = function(flickrURL, flickrAPI) {

  // };
};

PieService.$inject = ['$http', 'PARSE'];

export default PieService;