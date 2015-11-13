import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

import config from './config';

// Import Controllers
import SingleController from './controllers/singlePie.controller';
import ListController from './controllers/listPie.controller';
import AddController from './controllers/addPie.controller';
import EventController from './controllers/event.controller';
import MusicController from './controllers/music.controller';
import PieThumbController from './controllers/thumbs.controller';

// Import Services
import PieService from './services/pie.service';

angular
  .module('app', ['ui.router','mm.foundation'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'Tec0I8THknhW56Wzx9NHJUhxSeLJJwXZW4r19Xmm',
        'X-Parse-REST-API-Key': 'hFi3s0P4Pz1PL2Jq8mEQczOa5rBd3CSzBA3ZQ1LK'
      }
    }
  })
  .constant('SC','87898c71ec1b3ab1dd7f8ea2e5d02b02')
  .config(config)
  .controller('SingleController', SingleController)
  .controller('ListController', ListController)
  .controller('AddController', AddController)
  .controller('EventController', EventController)
  .controller('MusicController', MusicController)
  .controller('PieThumbController', PieThumbController)
  .service('PieService', PieService)
;