/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let map = {}
    let ans = 0

    for (let i = 0; i < nums.length; i++) { // populate map
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    for (let val of Object.values(map)) { // loop through counts
        if (val === 1) { 
            return -1
        }
        
        ans += Math.ceil(val / 3)
    }

    return ans
};