let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.list', {
      url: '/',
      views: {
        content: {
          controller: 'ListController',
          templateUrl: 'templates/list.tpl.html'
        }
        // music: {
        //   controller: 'MusicController',
        //   templateUrl: 'templates/listMusic.tpl.html'
        // },
        // thumbs: {
        //   controller: 'PieThumbController',
        //   templateUrl: 'templates/listThumb.tpl.html'
        // },
        // events: {
        //   controller: 'EventController',
        //   templateUrl: 'templates/listEvent.tpl.html'
        // },
        // form: {
        //   controller: 'AddController',
        //   templateUrl: 'templates/add.tpl.html'
        // }
      }
    })
    .state('root.stove', {
      url: '/single/:pieId',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;