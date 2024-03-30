/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    let n = nums.length;
    let res = 0;

    let counters0 = new Uint16Array(20001);
    let counters1 = new Uint16Array(20001);

    counters0.fill(0, 0, n);
    counters1.fill(0);

    let c0 = 0;
    let c1 = 0;
    let r0 = -1;
    let r1 = -1;

    for (let l = 0; l < n; ++l) {
        while (r0 < n && c0 < k) {
            if (++r0 == n) break;
            if (1 == ++counters0[nums[r0]]) ++c0;
        }
        while (r1 < n && c1 <= k) {
            if (++r1 == n) break;
            if (1 == ++counters1[nums[r1]]) ++c1;
        }

        res += r1 - r0;
        if (!--counters0[nums[l]]) --c0;
        if (!--counters1[nums[l]]) --c1;
    }

    return res;
};