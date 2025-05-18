/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    let product = 1

    for (let i = 0; i < nums.length; i++) {
        res[i] = product
        product *= nums[i]
    }

    product = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= product
        product *= nums[i]
    }

    return res
};