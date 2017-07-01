angular
    .module('app.new-trade')
    .factory('fixerservice', fixerservice);

fixerservice.$inject = ['$http'];

function fixerservice($http) {
    return {
        getForeignExchange: getForeignExchange,
        getRate: getRate,
        postTrade: postTrade
    };

    /**
     * Obtains the foreign exchange data
     */
    function getForeignExchange() {
        return $http.get('http://api.fixer.io/latest')
            .then(getForeignExchangeComplete)
            .catch(getForeignExchangeFailed);

        function getForeignExchangeComplete(response) {
            return response.data;
        }

        function getForeignExchangeFailed(error) {
            console.log('Error ' + error.data);
        }
    }

    /**
     * Obtains the rate between two symbols
     * @param sellSymbol
     * @param buySymbol
     */
    function getRate(sellSymbol, buySymbol){
        return $http.get('http://api.fixer.io/latest?base='+sellSymbol+'&symbols='+buySymbol)
            .then(getRateComplete)
            .catch(getRateFailed);

        function getRateComplete(response) {
            return response.data;
        }

        function getRateFailed(error) {
            console.log('Error ' + error.data);
        }
    }

    /**
     * Creates a trade with the data selected
     * @param sell_currency
     * @param sell_amount
     * @param buy_currency
     * @param rate
     */
    function postTrade(sell_currency, sell_amount, buy_currency, rate) {
        var data = {
            sell_currency: sell_currency,
            sell_amount: sell_amount,
            buy_currency: buy_currency,
            rate: rate
        };

        return $http.post('/api/1.0/trades/', data)
            .then(postTradeComplete)
            .catch(postTradeFailed);

        function postTradeComplete(response) {
            return response.data;
        }

        function postTradeFailed(error) {
            console.log('Error ' + error.data);
        }
    }


}