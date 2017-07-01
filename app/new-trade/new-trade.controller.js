'use strict';

angular.module('app.new-trade')
    .controller('NewTradeController',NewTradeController);

NewTradeController.$inject = ['fixerservice'];


function NewTradeController(fixerservice) {
    var vm = this;
    vm.symbols = [];
    vm.selectedSellSymbol = null;
    vm.selectedBuySymbol = null;
    vm.rate = 0.0;
    vm.changeSymbol = changeSymbol;
    vm.changeSellAmount = changeSellAmount;
    vm.createTrade = createTrade;
    vm.sellAmount = 0.0;
    vm.buyAmount = 0.0;


    activate();

    function activate() {
        getForeignExchange().then(function() {
            console.log('Activated ForeignExchange View');
        });
    }

    function getForeignExchange() {
        return fixerservice.getForeignExchange()
            .then(getForeignExchangeSuccess);
    }

    function getForeignExchangeSuccess(data){
        vm.symbols.push(data.base);
        _.forEach(data.rates, function(k, rate) {
            vm.symbols.push(rate);
        });
    }

    function changeSymbol() {
        if(vm.selectedSellSymbol && vm.selectedBuySymbol){
            fixerservice.getRate(vm.selectedSellSymbol, vm.selectedBuySymbol)
                .then(getRateSuccess);
        }
    }

    function getRateSuccess(data){
        vm.rate = data.rates[vm.selectedBuySymbol];
        console.log(vm.sellAmount);
        console.log(vm.rate);
        vm.buyAmount = vm.sellAmount * vm.rate;
    }

    function changeSellAmount() {
        if(vm.selectedSellSymbol && vm.selectedBuySymbol){
            vm.buyAmount = vm.sellAmount * vm.rate;
        }
    }

    function createTrade() {
        if(vm.selectedSellSymbol && vm.selectedBuySymbol && vm.sellAmount > 0.0 && vm.rate){
            fixerservice.postTrade(vm.selectedSellSymbol, vm.sellAmount, vm.selectedBuySymbol, vm.rate)
                .then(postTradeSuccess);
        }else if(vm.sellAmount <= 0.0){
            swal("Error","Sell Amount should be greater than 0", "warning")
        }
        else if(!vm.rate){
            swal("Error","Sell Currency and Buy currency should be different.", "warning")
        }
        else{
            swal("Error","Fill all fields before create a trade.", "warning")
        }
    }

    function postTradeSuccess(data){
        swal("Ok","Trade created correctly.", "success")
    }





}