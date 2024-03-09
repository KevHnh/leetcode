/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let map = {}
    nums1 = Array.from(new Set(nums1))
    nums2 = Array.from(new Set(nums2))

    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] ? map[nums1[i]]++ : map[nums1[i]] = 1
    }

    for (let i = 0; i < nums2.length; i++) {
        map[nums2[i]] ? map[nums2[i]]++ : map[nums2[i]] = 1
    }

    let sorted = Object.entries(map).sort((a,b) => a[0] - b[0])
    console.log(sorted)

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][1] >= 2) {
            return sorted[i][0]
        }
    }

    return -1
};