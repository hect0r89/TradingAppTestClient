'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute',
    'app.trades',
    'app.new-trade',
    'app.version'
]).config(config);

function config($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/trades'});
}

