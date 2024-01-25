/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let memo = new Array(text1.length + 1).fill().map(() => new Array(text2.length + 1).fill(0))

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                memo[i + 1][j + 1] = 1 + memo[i][j]
            }
            else {
                memo[i + 1][j + 1] = Math.max(memo[i + 1][j], memo[i][j + 1])
            }
        }
    }

    return memo[text1.length][text2.length]
};