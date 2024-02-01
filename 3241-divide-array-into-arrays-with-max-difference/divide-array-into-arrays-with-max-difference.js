/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
    nums = nums.sort((a, b) => a - b)
    let ans = []
    let len = nums.length

    for (let i = 0; i < len - 2; i = i + 3) {
        if (nums[i + 2] - nums[i + 1] <= k && nums[i + 2] - nums[i] <= k && nums[i + 1] - nums[i] <= k) {
            ans.push([nums[i], nums[i + 1], nums[i + 2]]) 
        }
        else {
            return []
        }
    }

    return ans
};