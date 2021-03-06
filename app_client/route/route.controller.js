(function() {
    "use strict";
    angular
	.module('busLocApp')
	.controller('routeCtrl', routeCtrl);

    routeCtrl.$inject = ['$scope', 'transdepData'];
    function routeCtrl($scope, transdepData) {
	var vm = this;

	transdepData.getStations()
	    .then(function(response) {
		vm.stations = response.data;
	    })
	    .catch(function(err) {
		console.log(err);
	    });
	transdepData.getRoutes()
	    .then(function(response) {
		vm.routes = response.data;
	    })
	    .catch(function(err) {
		console.log(err);
	    });
    }
})();
