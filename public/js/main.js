const module = angular.module('railium', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', routeProvider])

    // Add factory declarations here.
    .factory('Page', [pageService])
    .factory('Journey', ['$http', journeyService])
    .factory('Station', ['$http', stationService])

    // Add controller declarations here.
    .controller('MainController', ['$scope', 'Page', mainController])
    .controller('JourneyController', ['$scope', '$location', '$route', '$routeParams', 'Journey', journeyController])
    // .controller('StationController', ['$scope', '$location', '$route', '$routeParams', 'Station', stationController])

    // Add component declarations here.
    // .component('main', appComponent())

    .run(['$rootScope', '$route', 'Page', function ($rootScope, $route, Page) {
        $rootScope.$on('$routeChangeSuccess', function () {
            if ($route.current.title != undefined && !Page.hasProperty('key')) {
                Page.setProperty('title', $route.current.title);
            }
        });
    }]);
