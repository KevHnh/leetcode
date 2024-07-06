/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let curr = 1
    let dir = false

    while (time !== 0) {
        if (curr === n) {
            dir = true
        }
        else if (curr === 1) {
            dir = false
        }

        if (dir) {
            curr--
        }
        else {
            curr++
        }

        time--
    }

    return curr
};