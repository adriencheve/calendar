(function() {
    'use strict';

    var app = angular.module('SCWebApp');
    app.controller('DayController', ['$scope', 'data', DayController]);

    function DayController ($scope, Data) {
        $scope.init = function() {
            var data = Data.getEvents();

            console.log(data);
            $scope.data = {};
            $scope.data.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

            $scope.data.today = new Date();
            $scope.data.date = new Date();
        };

        $scope.nextDate = function() {
            $scope.data.date.setDate($scope.data.date.getDate() + 1);
        };

        $scope.prevDate = function() {
            $scope.data.date.setDate($scope.data.date.getDate() - 1);
        };

        $scope.jumpToToday = function() {
            $scope.data.date.setDate($scope.data.today.getDate());
        };

        $scope.init();

        window.app = $scope;
    }
})();
