/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) {
        return 1
    }

    let arr = new Array(n + 1).fill(0)

    for (let [person, judge] of trust) {
        arr[person]--
        arr[judge]++
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] + 1 === n) {
            return i
        }
    }

    return -1
};