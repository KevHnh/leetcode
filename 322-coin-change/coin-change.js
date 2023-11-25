/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let memo = new Array(amount + 1).fill(Infinity)

    memo[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                memo[i] = Math.min(memo[i], memo[i - coin] + 1)
            }
        }
    }

    return memo[amount] > amount ? -1 : memo[amount]
};