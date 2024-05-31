/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let map = {}
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    let entries = Object.entries(map)

    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] === 1) {
            ans.push(entries[i][0])
        }
    }

    return ans
};