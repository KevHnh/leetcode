/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {}

    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
    }

    let sorted = Object.entries(map).sort((a,b) => b[1] - a[1])
    let ans = ""

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted[i][1]; j++) {
            ans += sorted[i][0]
        }
    }

    return ans
};