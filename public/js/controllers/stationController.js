function stationController($scope, $location, $route, $routeParams, Station) {
  $scope.departureStations = [];
  $scope.arrivalStations = [];
  $scope.times = [];
  $scope.selectedDeparture = {};
  $scope.selectedArrival = {};

  $scope.getDepartureStations = function() {
    Station.getDepartureStations(function(res) {
      console.log(res.data);
      // $scope.departureStations = res.data;

      // $scope.departureStations =;
      // $scope.arrivalStations
    });
  }

  $scope.getArrivalStations = function() {
    console.log($scope.selectedDeparture);
    Station.getArrivalStations($scope.selectedDeparture.code, function(res) {
      console.log(res.data);
      $scope.arrivalStations = res.data;
      // $scope.departureStations =;
      // $scope.arrivalStations
    });
  }

  $scope.getTimes = function() {
    let journey = {
      'departure': $scope.selectedDeparture.code,
      'arrival': $scope.selectedArrival.code
    };

    Station.getTimes(journey, function(res) {
      console.log(res.data);
    });
  }
}
