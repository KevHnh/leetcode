/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let ans = nums[0]
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        if (nums[left] <= nums[right]) {
            ans = Math.min(nums[left], ans)
            break
        }

        let mid = Math.floor((right + left) / 2)
        ans = Math.min(nums[mid], ans)

        if (nums[left] <= nums[mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }

    return ans
};