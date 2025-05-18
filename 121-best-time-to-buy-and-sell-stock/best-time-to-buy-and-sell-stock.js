/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let left = 0
    let right = 0

    while (right < prices.length) {
        let curr = prices[right] - prices[left] 
        max = Math.max(max, curr)

        if (prices[left] > prices[right]) {
            left = right
        }

        right++
    }

    return max
};