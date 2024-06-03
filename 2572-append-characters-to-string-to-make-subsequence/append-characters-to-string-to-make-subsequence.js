/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    s = s.split("")
    t = t.split("")

    let left = 0
    let right = 0

    while (left < s.length) {
        if (s[left] === t[right]) {
            left++
            right++
        }
        else {
            left++
        }
    }

    return t.splice(right, t.length).length
};