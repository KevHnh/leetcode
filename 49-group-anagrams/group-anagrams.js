/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sorted = strs.map(str => str.split("").sort().join(""))
    let map = {}

    for (let i = 0; i < strs.length; i++) {
        if (map[sorted[i]]) {
            map[sorted[i]].push(strs[i])
        }
        else {
            map[sorted[i]] = [strs[i]]
        }
    }

    return Object.values(map)
};