/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let map = {}
    let ans = 0

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }

    for (let val of Object.values(map)) {
        if (val === 1) {
            return -1
        }
        else if (val % 3 === 0){
            ans += (val / 3)
        }
        else if (val % 3 === 1) {
            ans += 2
            val -= 4
            ans += (val / 3)
        }
        else if (val % 3 === 2) {
            ans += 1
            val -= 2
            ans += (val / 3)
        }
    }

    return ans
};