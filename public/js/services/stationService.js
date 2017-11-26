const stationService = function ($http) {
  return {
    selectJourney: function(params, success, error) {
      return $http.post('/api/', {params: params}).then(success, error);
    },

    getDepartureStations: function(success, error) {
      return $http.get('/api/stations').then(success, error);
    },

    getArrivalStations: function(params, success, error) {
      return $http.get('/api/station/arrival/' + params).then(success, error);
    },

    getTimes: function(params, success, error) {
      let endpoint = params.departure + '/' + params.arrival;
      return $http.get('/api/station/' + endpoint, {params: params}).then(success, error);
    },
  };
};
