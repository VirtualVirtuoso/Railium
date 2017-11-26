function journeyController($scope, $location, $route, $routeParams, Journey) {
  $scope.departureStations = [];
  $scope.arrivalStations = [];
  $scope.times = [];
  $scope.selectedDeparture = {};
  $scope.selectedArrival = {};
  $scope.selectedTime = null;
  $scope.results = {};

  $scope.faults = ['Toilets', 'Power Socket', 'Luggage Space', 'Bike Space', 'Disabled Access', 'Refreshments', 'WiFi', 'Sausage Rolls'];

  $scope.getDepartureStations = function() {
    Journey.getDepartureStations(function(res) {
      console.log(res.data);
      $scope.departureStations = res.data;

      // $scope.departureStations =;
      // $scope.arrivalStations
    });
  }

  $scope.getArrivalStations = function() {
    console.log($scope.selectedDeparture);
    Journey.getArrivalStations($scope.selectedDeparture.code, function(res) {
      console.log(res.data);
      $scope.arrivalStations = res.data;
      // $scope.departureStations =;
      // $scope.arrivalStations
    });
  }

  $scope.getTimes = function() {
    console.log($scope.selectedArrival);

    let journey = {
      'departure': $scope.selectedDeparture.code,
      'arrival': $scope.selectedArrival.code
    };

    Journey.getTimes(journey, function(res) {
      console.log(res.data);
      $scope.times = res.data;
    });
  }

  $scope.collectResults = function() {
    console.log($scope.results);
    // Journey.sendResults($scope.results, function(res) {
    //   console.log(res.data);
    // });
  }
}
