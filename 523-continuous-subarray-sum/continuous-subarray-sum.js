/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let store = new Set();
    let sum = 0, prev = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let r = sum % k;

        if (store.has(r)) {
            return true;
        }
        
        store.add(prev);
        prev = r;
    }

    return false;
};