/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0

    for (let i = 1; i < s.length; i++) {
        let curr = 0

        if (i === 0) {
            curr = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
        }
        else {
            curr = Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i))
        }

        sum += curr
    }

    return sum
};