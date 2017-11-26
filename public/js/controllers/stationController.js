function stationController($scope, $location, $route, $routeParams, Station) {
  $scope.departureStations = [];
  $scope.arrivalStations = [];
  $scope.times = [];
  $scope.selectedDeparture = {};
  $scope.selectedArrival = {};
  $scope.selectedTime = null;
  $scope.results = {};

  $scope.faults = ['Toilets', 'Power Socket', 'Luggage Space', 'Bike Space', 'Disabled Access', 'Refreshments', 'WiFi', 'Sausage Rolls'];

  $scope.getDepartureStations = function() {
    Station.getDepartureStations(function(res) {
      console.log(res.data);
      $scope.departureStations = res.data;

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
  let journey = {};
  $scope.getTimes = function() {
    console.log($scope.selectedArrival);

    let journey = {
      'departure': $scope.selectedDeparture.code,
      'arrival': $scope.selectedArrival.code
    };

    Station.getTimes(journey, function(res) {
      console.log(res.data);
      $scope.times = res.data;
    });
  }

  $scope.collectResults = function() {
    $scope.results.time = $scope.selectedTime;
    console.log($scope.results);
    Station.sendResults($scope.results, function(res) {
      console.log(res.data);
    });
  }
}
