(function(){
    "use strict";
    angular
	.module('busLocApp')
	.service('googleDirection', googleDirection);

    googleDirection.$inject = ['$http'];
    function googleDirection($http) {
	var service = this;
	service.remainingTime = function(origin, destination, api_key) {
	    return $http.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
		params: {
		    units: 'metre',
		    origins: origin,
		    destinations: destination,
		    key: api_key
		}
	    });
	}
    }
})();
