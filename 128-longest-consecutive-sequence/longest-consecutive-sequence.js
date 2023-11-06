/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let ans = 0

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let size = 0
            while (set.has(nums[i] + size)) {
                size++
                ans = Math.max(ans, size)
            }
        }
    }

    return ans
};