/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let map = {};
    map[0] = 1;

    let sum = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result += (map[sum - goal] || 0);
        map[sum] = (map[sum] || 0) + 1;
    }

    return result;
};