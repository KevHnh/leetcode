/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {')' : '(', '}' : '{', ']' : '['}
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            if (stack[stack.length - 1] === map[s[i]]) {
                stack.pop()
            }
            else {
                return false
            }
        }
        else {
            stack.push(s[i])
        }
    }

    return stack.length === 0
};