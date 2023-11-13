/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) {
        return ""
    }

    let map = {}

    for (let i = 0; i < t.length; i++) {
        map[t[i]] ? map[t[i]]++ : map[t[i]] = 1
    }

    let left = 0
    let right = 0
    let reqLen = Object.keys(map).length
    let ans = ""

    while (right < s.length) {
        map[s[right]]--

        if (map[s[right]] === 0) {
            reqLen--
        }

        while (reqLen === 0) {
            if (!ans || ans.length > right - left + 1) {
                ans = s.slice(left, right + 1)
            }

            if (map[s[left]] === 0) {
                reqLen++
            }

            map[s[left]]++
            left++
        }

        right++
    }

    return ans;
};