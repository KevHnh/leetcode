/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        let curr = (right - left) * Math.min(height[left], height[right])
        max = Math.max(max, curr)

        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }

    return max
};