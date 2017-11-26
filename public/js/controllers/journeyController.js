function journeyController($scope, $location, $route, $routeParams, Journey) {
  $scope.departureStations = [];
  $scope.arrivalStations = [];
  $scope.times = [];
  $scope.selectedDeparture = {};
  $scope.selectedArrival = {};
  $scope.selectedTime = null;
  console.log('aaaa')

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
    let journey = {
      'departure': $scope.selectedDeparture.code,
      'arrival': $scope.selectedArrival.code
    };

    Journey.getTimes(journey, function(res) {
      console.log(res.data);
    });
  }
}
