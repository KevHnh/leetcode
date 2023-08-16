/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = []
    let queue = []

    for (let right = 0; right < nums.length; right++) {
        while (queue.length >= 1 && nums[right] > queue[queue.length - 1]) {
            queue.pop()
        }

        queue.push(nums[right])

        let left = right + 1 - k

        if (left >= 0) {
            res.push(queue[0])

            if (nums[left] === queue[0]) {
                queue.shift()
            }
        }
    }

    return res
};