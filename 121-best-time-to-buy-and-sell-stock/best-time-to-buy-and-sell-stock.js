/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0
    let right = 1
    let ans = 0

    while (right < prices.length) {
        ans = Math.max(prices[right] - prices[left], ans)

        if (prices[left] >= prices[right]) {
            left = right
        }

        right++
    }

    return ans
};