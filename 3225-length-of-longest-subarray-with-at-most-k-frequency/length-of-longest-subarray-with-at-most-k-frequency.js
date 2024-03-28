/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    let start = 0;
    let end = 0;
    const length = nums.length;
    const frequencyMap = {};

    let maxLength = 0;

    for (end = 0; end < length; end++) {
        const current = nums[end];
        frequencyMap[current] = (frequencyMap[current] || 0) + 1;

        if (frequencyMap[current] > k) {
            while (start < end && frequencyMap[current] > k) {
                if (frequencyMap[nums[start]] === 1) {
                    delete frequencyMap[nums[start]];
                } else {
                    frequencyMap[nums[start]]--;
                }
                start++;
            }
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};