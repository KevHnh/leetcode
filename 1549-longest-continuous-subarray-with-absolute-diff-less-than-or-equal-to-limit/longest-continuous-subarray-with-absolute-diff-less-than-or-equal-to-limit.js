/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    if (nums.length <= 1) {
        return 1
    }

    let maxN = []
    let minN = [];
    let l = 0;
    let r;

    for (r = 0; r < nums.length; r++) {
        while (maxN.length && nums[r] > maxN[maxN.length - 1]) {
            maxN.pop()
        }

        while (minN.length && nums[r] < minN[minN.length - 1]) {
            minN.pop()
        }

        maxN.push(nums[r])
        minN.push(nums[r])

        if (maxN[0] - minN[0] > limit) {
            if (nums[l] == maxN[0]) {
                maxN.shift()
            }
            
            if (nums[l] == minN[0]) {
                minN.shift()
            }
            l++
        }
    }

    return r - l
};