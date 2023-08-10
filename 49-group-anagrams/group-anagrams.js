/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}

    for (let i = 0; i < strs.length; i++) {
        let sort = strs[i].split("").sort().join("")

        if (!map[sort]) {
            map[sort] = []
        }

        map[sort].push(strs[i])
    }

    return Object.values(map)
};