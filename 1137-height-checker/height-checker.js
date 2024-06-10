/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let copy = [...heights]
    let sorted = heights.sort((a,b) => a - b)
    let ans = 0

    for (let i = 0; i < sorted.length; i++) {
        if (copy[i] !== sorted[i]) {
            ans++
        }
    }

    return ans
};