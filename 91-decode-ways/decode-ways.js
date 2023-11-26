/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') {
        return 0
    }

    let memo = new Array(s.length + 1).fill(0)
    memo[0] = 1
    memo[1] = 1

    for (let i = 1; i < s.length; i++) {
        let single = parseInt(s[i])
        let double = parseInt(s[i - 1] + s[i])

        if (single >= 1 && single <= 9) {
            memo[i + 1] += memo[i]
        }

        if (double >= 10 && double <= 26) {
            memo[i + 1] += memo[i - 1]
        }
    }

    return memo[memo.length - 1]
};