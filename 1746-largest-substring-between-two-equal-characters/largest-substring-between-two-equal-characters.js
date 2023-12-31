/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let map = {}
    let ans = -1

    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]].push(i) : map[s[i]] = [i]
    }

    for (let item of Object.values(map)) {
        if (item.length > 1) {
            ans = Math.max(item[item.length - 1] - item[0] - 1, ans)
        }
    }

    return ans
};