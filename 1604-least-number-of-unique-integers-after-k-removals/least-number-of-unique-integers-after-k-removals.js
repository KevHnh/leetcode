/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] ? map[arr[i]]++ : map[arr[i]] = 1
    }

    let cnt = Object.values(map).sort((a, b) => a - b)

    while (k > 0) {
        cnt[0]--

        if (cnt[0] === 0) {
            cnt.shift()
        }

        k--
    }

    return cnt.length
};