/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let queue = []

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            let num1 = queue.pop()
            let num2 = queue.pop()

            queue.push(num2 + num1)
        }
        else if (tokens[i] === "-") {
            let num1 = queue.pop()
            let num2 = queue.pop()

            queue.push(num2 - num1)
        }
        else if (tokens[i] === "*") {
            let num1 = queue.pop()
            let num2 = queue.pop()

            queue.push(num2 * num1)
        }
        else if (tokens[i] === "/") {
            let num1 = queue.pop()
            let num2 = queue.pop()

            queue.push(parseInt(num2 / num1))
        }
        else {
            queue.push(parseInt(tokens[i]))
        }
    }

    return queue[0]
};