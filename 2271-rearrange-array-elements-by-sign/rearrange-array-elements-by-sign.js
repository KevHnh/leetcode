/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let pos = nums.filter(num => num > 0)
    let neg = nums.filter(num => num < 0)
    let ans = []

    for (let i = 0; i < nums.length / 2; i++) {
        ans.push(pos[i], neg[i])
    }

    return ans
};