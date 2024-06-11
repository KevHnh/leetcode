/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let map = {}
    let ans = []

    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] ? map[arr1[i]]++ : map[arr1[i]] = 1
    }

    for (let i = 0; i < arr2.length; i++) {
        while (map[arr2[i]] !== 0) {
            ans.push(arr2[i])
            map[arr2[i]]--
        }

        delete map[arr2[i]]
    }

    let remainder = Object.entries(map).sort((a, b) => a[0] - b[0])

    for (let i = 0; i < remainder.length; i++) {
        while (remainder[i][1] !== 0) {
            ans.push(remainder[i][0])
            remainder[i][1]--
        }
    }

    return ans
};