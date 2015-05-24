(function() {
    'use strict';

    var app = angular.module('SCWebApp');

    app.factory('data', ['$http', function($http) {
        var factory = {};

        factory.getAllEvents = function() {
            return $http.get('app/data/data.json');
        };

        // Finds the events for the given date
        factory.getEventsForDay = function(date) {
            // TODO: find the events for the given date
            return [];
        };

        // Initializing structure for storing dates
        function init() {
            factory.years = {};

            factory.events = factory.events.map(function(event) {
                // TODO: Map the event object with the format we want
                // TODO: Initialize necessary years months
            });
        }

        return factory;
    }]);
})();
