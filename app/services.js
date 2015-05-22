(function() {
    'use strict';

    var app = angular.module('SCWebApp');

    app.factory('data', ['$http', function($http) {
        var factory = {};
        factory.getEvents = function() {
            $http.
                get('app/data/data.json').
                success(function(data) {
                    return data;
                });
        };

        return factory;
    }]);
})();
