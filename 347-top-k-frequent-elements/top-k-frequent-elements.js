/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    let sorted = Object.entries(map).sort((a, b) => b[1] - a[1])

    return sorted.slice(0, k).map((entry) => Number(entry[0]))
};