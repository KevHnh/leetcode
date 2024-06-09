/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let prefixRem = 0
    let res = 0
    let map = {}

    for (let i = 0; i < k; i++) {
        map[i] = 0
    }

    map[0] = 1

    for (let num of nums) {
        prefixRem = (prefixRem + num % k + k) % k
        res += map[prefixRem]
        map[prefixRem]++
    }

    return res
};