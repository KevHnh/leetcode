/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let map = {}
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 0
        }  

        if (map[nums[i]] >= ans.length) {
            ans.push([nums[i]])
        }
        else {
            ans[map[nums[i]]].push(nums[i])
        }

        map[nums[i]]++
    }

    return ans
};