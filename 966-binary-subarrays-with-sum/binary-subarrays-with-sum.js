/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let counts = new Map();

    counts.set(0, 1);

    let sum = 0;
    let ans = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let comp = sum - goal;
        ans += counts.get(comp) || 0;
        counts.set(sum, (counts.get(sum) || 0) + 1);
    }
    return ans;
};