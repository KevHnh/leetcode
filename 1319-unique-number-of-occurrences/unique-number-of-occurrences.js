/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] ? map[arr[i]]++ : map[arr[i]] = 1
    }

    let cnt = Object.values(map)

    return cnt.length === new Set(cnt).size
};