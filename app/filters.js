(function() {
    'use strict';

    var app = angular.module('SCWebApp');

    // Convert number into hour format
    app.filter('hour', function() {
        return function(number) {
            var hour = number % 12;
            hour = (hour === 0) ? 12 : hour;

            var meridiem = number <= 12 ? 'AM' : 'PM';
            return hour + ' :00 ' + meridiem;
        };
    });

    app.filter('range', function() {
        return function(input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++) {
                input.push(i);
            }

            return input;
        };
    });
})();
