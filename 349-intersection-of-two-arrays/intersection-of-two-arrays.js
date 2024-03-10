/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set = new Set()

    for (let i = 0; i < nums1.length; i++) {
        set.add(nums1[i])
    }

    let ans = []

    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            ans.push(nums2[i])
            set.delete(nums2[i])
        }
    }

    return ans
};