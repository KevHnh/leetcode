/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let n = nums.length
    let ans = 0

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
            ans++
            let j = i + 1

            while (nums[j] - nums[j - 1] === nums[j + 1] - nums[j]) {
                ans++
                j++
            }
        }
    }

    return ans
};