/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let left = 0
    let right = 0
    let ans = 0

    while (right < s.length) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }

        set.add(s[right])
        ans = Math.max(ans, right - left + 1)
        right++
    }

    return ans
};