/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let memo = [0]

    for (let i = 1; i <= n; i++) {
        memo[i] = Infinity

        for (let j = 1; j * j <= i; j++) {
            memo[i] = Math.min(memo[i], memo[i - j * j] + 1)
        }
    }

    return memo[n]
};