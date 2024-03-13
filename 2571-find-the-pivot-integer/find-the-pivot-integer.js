/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    if (n === 1) {
        return 1
    }

    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum += i
    }

    let leftSum = sum
    let rightSum = sum

    for (let i = n; i >= 1; i--) {        
        leftSum -= i
        rightSum = sum
        rightSum -= leftSum + i

        if (leftSum === rightSum) {
            return i
        }
    }

    return -1
};