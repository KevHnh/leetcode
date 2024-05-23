/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
    var bt = (idx, arr) => {
        if (idx === nums.length) {
            if (arr.length) return 1;
            return 0;
        }

        let res = 0;

        if (!arr.includes(nums[idx] - k) && !arr.includes(nums[idx] + k)) {
            arr.push(nums[idx]);
            res += bt(idx + 1, arr);
            arr.pop();
        }
        
        res += bt(idx + 1, arr);

        return res;
    }

    return bt(0, []);
};