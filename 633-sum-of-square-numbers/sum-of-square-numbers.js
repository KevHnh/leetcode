/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0
    let right = Math.floor(Math.sqrt(c))

    while (left <= right) {
        let a = left * left
        let b = right * right
        let sum = a + b

        if (sum === c) {
            return true
        }
        else if (sum > c) {
            right--
        }
        else {
            left++
        }
    }

    return false
};