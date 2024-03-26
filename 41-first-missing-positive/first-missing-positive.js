/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let set = new Set(nums)
    let i = 1

    while (set.has(i)) {
        i++
    }

    return i
};