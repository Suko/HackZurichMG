var app = angular.module('wunderschlaf',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/graphs.html',
                controller: 'GraphCtrl'
            }).
            when('/device', {
                templateUrl: 'partials/device.html',
                //controller: 'PhoneDetailCtrl'
            })
            /*
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
             */
    }]);


app.controller('GraphCtrl', ['$scope', function($scope) {

    var columnColor = '#0CA8E8';

    drawGraph('#fluster', 'Fluster');
    drawGraph('#temp', 'Temperature');
    drawGraph('#light', 'Light');
    drawGraph('#noise', 'Noise');
    drawGraph('#humidity', 'Humidity');

    function drawGraph(selector, label) {
        $(selector).highcharts({
            chart: {
                type: 'area',
                spacingTop: 30
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: label
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: label,
                data: [27387, 29459, 310566, 11, 32, 110, 235, 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                    26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                    22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                    10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104],
                pointStart: Date.UTC(2010, 1, 1, 21),
                pointEnd: Date.UTC(2010, 1, 2, 6),
                pointInterval: 24 *  3600 * 1000 // one hour
            }]
        });
    }

}]);