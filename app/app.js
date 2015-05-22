(function() {
    'use strict';

    angular.module('SCWebApp', ['ngRoute'])
        .config(['$routeProvider', routeProvider])
        .config(['$locationProvider', locationProvider]);

    function routeProvider ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/views/dayView.html',
            controller: 'DayController'
        }).otherwise({
            redirectTo: '/'
        });
    }

    function locationProvider($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
})();
