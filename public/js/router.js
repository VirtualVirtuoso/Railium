function routeProvider($routeProvider, $locationProvider, $httpProvider) {

    // Add all pages here
    $routeProvider
      .when('/', {
        title: 'Railium',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/journey', {
        templateUrl: 'views/journey.html',
        controller: 'JourneyController'
      })
      .when('/station', {
        templateUrl: 'views/station.html',
        controller: 'StationController'
      });
      // .when('/journey/survey', {
      //   templateUrl: 'views/journeySurvey.html',
      //   controller: 'JourneySurveyController'
      // })
      // .when('/station/survey', {
      //   templateUrl: 'views/stationSurvey.html',
      //   controller: 'StationSurveyController'
      // });

    // Otherwise
    $routeProvider.otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
}
