/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map = {}
    let ans = 0

    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
    }

    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] > 0) {
            map[t[i]]--
        }
        else {
            ans++
        }
    }

    return ans
};