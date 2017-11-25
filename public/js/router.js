function routeProvider($routeProvider, $locationProvider, $httpProvider) {

    // Add all pages here
    $routeProvider
      .when('/', {
        title: 'Railium',
        templateUrl: 'views/view.html',
        controller: 'AppController'
      });

    // Otherwise
    $routeProvider.otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
}
