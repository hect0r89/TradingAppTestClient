'use strict';

angular.module('app.trades')
    .controller('TradesController', TradesController);

TradesController.$inject = ['tradeservice'];

function TradesController(tradeservice) {
    var vm = this;
    vm.trades = [];

    activate();

    function activate() {
        getTrades().then(function() {
            console.log('Activated ForeignExchange View');
        });
    }

    function getTrades() {
        return tradeservice.getTrades()
            .then(getTradesSuccess);
    }

    function getTradesSuccess(data){
        vm.trades = data;
    }
}