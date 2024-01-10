/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let map = { ")": "(", "]": "[", "}": "{" }
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] != undefined) {
            if (stack[stack.length - 1] === map[s[i]]) {
                stack.pop()
            }
            else {
                stack.push(s[i])
            }
        }
        else {
            stack.push(s[i])
        }
    }

    return stack.length
};