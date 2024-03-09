/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let left = 0;
    let right = 0;

    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] === nums2[right]) {
            return nums1[left];
        } else if (nums1[left] > nums2[right]) {
            right++;
        } else {
            left++;
        }
    }
    
    return -1;
};