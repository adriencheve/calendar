(function() {
    'use strict';

    var app = angular.module('SCWebApp');
    app.controller('DayController', ['$scope', 'data', DayController]);

    function DayController ($scope, Data) {
        $scope.init = function() {
            // var data = Data.getEvents();

            // console.log(data);

            $scope.data = {};

            $scope.data.today = new Date();
            $scope.data.date = new Date();

            $scope.$watch('data.date', function() {
                $scope.updateEvents();
            });
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

        $scope.updateEvents = function() {
            $scope.events = Data.getEventsForDay($scope.data.date);
        };

        $scope.init();

        window.app = $scope;
    }
})();
