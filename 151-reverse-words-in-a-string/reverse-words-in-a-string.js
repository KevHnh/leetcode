/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(" ")
    let ans = []

    for (let i = 0; i < s.length; i++) {
        if (s[i].length === 0) {
            continue
        }
        else {
            ans.push(s[i])
        }
    }

    return ans.reverse().join(" ")
};