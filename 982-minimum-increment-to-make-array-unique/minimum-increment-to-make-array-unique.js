/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let set = new Set()
    let ans = 0

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i])
        }
        else {
            let temp = nums[i]
            let prev = nums[i - 1]
            let newVal = prev + 1
            nums[i] = newVal
            ans += (newVal - temp)
            set.add(nums[i])
        }
    }

    console.log(set)

    return ans
};