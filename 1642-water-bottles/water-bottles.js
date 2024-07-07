/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let ans = numBottles
    let exchange = true
    
    while (exchange) {
        let curr = Math.floor(numBottles / numExchange)
        numBottles = curr + (numBottles % numExchange)

        if (numBottles < numExchange) {
            exchange = false
        }

        ans += curr
    }

    return ans
};