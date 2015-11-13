import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import SingleController from './controllers/singlePie.controller';
import ListController from './controllers/listPie.controller';
import AddController from './controllers/addPie.controller';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'Tec0I8THknhW56Wzx9NHJUhxSeLJJwXZW4r19Xmm',
        'X-Parse-REST-API-Key': 'hFi3s0P4Pz1PL2Jq8mEQczOa5rBd3CSzBA3ZQ1LK'
      }
    }
  })
  .config(config)
  .controller('SingleController', SingleController)
  .controller('ListController', ListController)
  .controller('AddController', AddController)
;