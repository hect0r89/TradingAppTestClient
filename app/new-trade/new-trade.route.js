'use strict';

angular.module('app.new-trade', ['ngRoute'])
    .config(NewTradeConfig);

function NewTradeConfig($routeProvider) {
    $routeProvider.when('/new-trade', {
        templateUrl: 'new-trade/new-trade.html',
        controller: 'NewTradeController',
        controllerAs: 'vm',

    });
}