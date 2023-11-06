/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let ans = 0

    while (left < right) {
        let curr = Math.min(height[left], height[right]) * (right - left)
        ans = Math.max(curr, ans)

        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }

    }
    
    return ans
};