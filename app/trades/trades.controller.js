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

    /**
     * Gets the existents trades in the server
     */
    function getTrades() {
        return tradeservice.getTrades()
            .then(getTradesSuccess);
    }

    /**
     * If the get trades request is successful saves the data.
     */
    function getTradesSuccess(data){
        vm.trades = data;
    }
}