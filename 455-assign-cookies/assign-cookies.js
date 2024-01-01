/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let ans = 0
    let left = 0
    let right = 0

    g = g.sort((a,b) => b - a)
    s = s.sort((a,b) => b - a)

    while (right < s.length) {
        if (g[left] <= s[right]) {
            ans++
            left++
            right++
        }
        else if (g[left] > s[right]) {
            left++
        }
        else {
            return ans
        }
    }

    return ans
};