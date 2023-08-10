/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    let min = nums[0]

    while (left <= right) {
        if (nums[left] <= nums[right]) {
            min = Math.min(min, nums[left])
        }

        let mid = Math.floor((left + right) / 2)
        min = Math.min(min, nums[mid])

        if (nums[left] <= nums[mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }

    return min
};