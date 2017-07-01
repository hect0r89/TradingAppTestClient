angular
    .module('app.trades')
    .factory('tradeservice', tradeservice);

tradeservice.$inject = ['$http'];

function tradeservice($http) {
    return {
        getTrades: getTrades
    };

    /**
     * Obtains the trades from the server
     */
    function getTrades() {
        return $http.get('/api/1.0/trades/')
            .then(getTradesComplete)
            .catch(getTradesFailed);

        function getTradesComplete(response) {
            return response.data;
        }

        function getTradesFailed(error) {
            console.log('Error ' + error.data);
        }
    }
}
