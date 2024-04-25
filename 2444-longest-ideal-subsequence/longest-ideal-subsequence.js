/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
    s = s.split('').map(c => c.charCodeAt() - 97)
    const dp = new Array(s.length).fill(1)
    const prev = new Array(26).fill(-1)

    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        for (let j = 0; j < 26; j++) {
            if (Math.abs(char - j) <= k) {
                dp[i] = Math.max(dp[i], (dp[prev[j]] || 0) + 1)
            }
        }
        
        prev[char] = i
    }


    return Math.max(...dp)
};