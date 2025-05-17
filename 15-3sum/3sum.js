/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    nums = nums.sort((a, b) => a - b)
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break
        }
        
        if (nums[i] === nums[i - 1] && i > 0) {
            continue
        }

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            let curr = nums[i] + nums[left] + nums[right]

            if (curr === 0) {
                ans.push([nums[i], nums[left], nums[right]])

                while (nums[left] === nums[left + 1]) {
                    left++
                }
                while (nums[right] === nums[right - 1]) {
                    right--
                }

                left++
                right--
            }
            else if (curr > 0) {
                right--
            }
            else {
                left++
            }
        }
    }

    return ans
};