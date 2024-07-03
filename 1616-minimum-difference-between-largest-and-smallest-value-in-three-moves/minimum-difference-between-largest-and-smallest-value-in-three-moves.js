/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    if (n <= 4) {
        return 0;
    }

    let op1 = nums[n - 4] - nums[0];
    let op2 = nums[n - 3] - nums[1];
    let op3 = nums[n - 2] - nums[2];
    let op4 = nums[n - 1] - nums[3];

    return Math.min(op1, op2, op3, op4);
};