(function() {
    'use strict';

    var app = angular.module('SCWebApp');
    app.controller('DayController', ['$scope', '$http', DayController]);

    function DayController ($scope, $http) {
        $http.get('app/data/data.json').success(function(data) {
            console.log(data);
        });
    }
})();
