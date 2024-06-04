/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {}

    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
    }

    let ans = 0
    let odd = false
    let values = Object.values(map)

    for (let i = 0; i < values.length; i++) {
        if (!odd && values[i] % 2 !== 0) {
            ans += values[i]
            odd = true
        }
        else {
            if (values[i] % 2 !== 0 && odd) {
                ans += values[i] - 1
            }
            else {
                ans += values[i]
            }
        }
    }

    return ans
};