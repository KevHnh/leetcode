/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    let sorted = strs.map((str) => str.split("").sort().join(""))

    for (let i = 0; i < sorted.length; i++) {        
        if (map[sorted[i]] === undefined) {
            map[sorted[i]] = []
        }

        map[sorted[i]].push(strs[i])
    }

    return Object.values(map)
};