'use strict';

angular.module('app.trades', ['ngRoute'])
    .config(tradesConfig);

function tradesConfig($routeProvider) {
    $routeProvider.when('/trades', {
        templateUrl: 'trades/trades.html',
        controller: 'TradesController',
        controllerAs: 'vm',

    });
}