/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    let sorted = Object.values(map).sort((a, b) => b - a)
    let ans = 0
    let max = sorted[0]

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === max) {
            ans += sorted[i]
        }
        else {
            break
        }
    }

    return ans
};