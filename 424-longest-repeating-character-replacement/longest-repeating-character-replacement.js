/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = {}
    let maxChar = 0
    let left = 0
    let right = 0
    let ans = 0

    while (right < s.length) {
        map[s[right]] ? map[s[right]]++ : map[s[right]] = 1
        maxChar = Math.max(maxChar, map[s[right]])

        while ((right - left + 1) - maxChar > k) {
            map[s[left]]--
            left++
        }

        ans = Math.max(ans, right - left + 1)
        right++
    }

    return ans
};