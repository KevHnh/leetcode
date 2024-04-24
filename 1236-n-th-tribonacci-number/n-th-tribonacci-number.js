/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let memo = []

    memo[0] = 0
    memo[1] = 1
    memo[2] = 1

    if (n === 0 || n === 1 || n === 2) {
        return memo[n]
    }

    for (let i = 2; i < n; i++) {
        memo[i + 1] = memo[i] + memo[i - 1] + memo[i - 2]
    }

    return memo[memo.length - 1]
};