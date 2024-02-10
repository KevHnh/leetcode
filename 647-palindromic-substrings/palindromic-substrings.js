/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let res = 0

    for (let i = 0; i < s.length; i++) {
        res += count(i, i)
        res += count(i, i + 1)
    }

    function count(left, right) {
        let cnt = 0

        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            cnt++
            left--
            right++
        }

        return cnt
    }

    return res
};