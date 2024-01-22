/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let dupe = 0
    let set = new Set()
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        !set.has(nums[i]) ? set.add(nums[i]) : dupe = nums[i]
    }

    for (let i = 1; i < nums.length + 1; i++) {
        if (!set.has(i)) {
            return [dupe, i]
        }
    }
};