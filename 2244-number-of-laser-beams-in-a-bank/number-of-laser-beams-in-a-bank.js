/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let ans = 0
    let left = 0
    let right = 1

    while (right < bank.length) {
        let prev = bank[left].replace(/[0]/gi, "").length
        let next = bank[right].replace(/[0]/gi, "").length

        if (next === 0) {
            right++
            continue
        }

        if (prev === 0) {
            left++
            continue
        }

        if (left !== right) {
            ans += prev * next
            left = right
        }

        right++
    }

    return ans
};