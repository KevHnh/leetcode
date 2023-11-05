/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    let sortedArr = []

    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split("").sort().join("")
        sortedArr.push(sorted)
    }

    for (let i = 0; i < strs.length; i++) {
        if (map[sortedArr[i]] !== undefined) {
            map[sortedArr[i]].push(strs[i])
        }
        else {
            map[sortedArr[i]] = [strs[i]]
        }
    }

    return Object.values(map)
};