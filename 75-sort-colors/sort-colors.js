/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let map = { "0": 0, "1": 0, "2": 0 }

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]]++
    }

    let cnt = Object.entries(map)
    let index = 0

    for (let i = 0; i < cnt.length; i++) {
        while (cnt[i][1] > 0) {
            nums[index] = cnt[i][0]
            cnt[i][1]--
            index++
        }
    }
};