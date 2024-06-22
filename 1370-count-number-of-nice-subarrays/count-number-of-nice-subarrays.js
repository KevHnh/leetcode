/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let odds = 0
    let count = 0
    let prefix = 0
    let curr = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            odds++
            prefix = 0
        }

        while (odds === k && curr <= i) {
            if (nums[curr] % 2 !== 0) {
                odds--
            }

            curr++
            prefix++
        }

        count += prefix
    }

    return count
};