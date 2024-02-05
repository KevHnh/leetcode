/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = {}

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            map[s[i]] = "REPEAT"
        }
        else {
            map[s[i]] = [[s[i], i]]
        }
    }

    let entries = Object.entries(map).filter(a => a[1] !== 'REPEAT')

    return entries.length === 0 ? -1 : entries[0][1][0][1]
};