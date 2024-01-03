/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let ans = 0
    let row = 0

    for (let i = 0; i < bank.length; i++) {
        let curr = bank[i].split("0").join("").length // Number of lasers at i

        if (curr !== 0) { // if current row contains lasers
            ans += row * curr
            row = curr
            curr = 0
        }
    }

    return ans
};