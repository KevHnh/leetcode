/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let map = {};
    
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    return nums.sort((a, b) => map[a] - map[b] || b - a)
};