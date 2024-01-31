/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [[temperatures[0], 0]]
    let ans = new Array(temperatures.length).fill(0)

    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[i] > stack[stack.length - 1][0]) {
            let pop = stack.pop()
            ans[pop[1]] = i - pop[1]
        }

        stack.push([temperatures[i], i])
    }

    return ans
};