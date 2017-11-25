function routeProvider($routeProvider, $locationProvider, $httpProvider) {

    // Add all pages here
    $routeProvider
      .when('/', {
        title: 'Railium',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/journey', {
        title: 'Railium',
        templateUrl: 'views/train.html',
        controller: 'MainController'
      })
      .when('/station', {
        title: 'Railium',
        templateUrl: 'views/journey.html',
        controller: 'MainController'
      });

    // Otherwise
    $routeProvider.otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
}
