/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let ans = 0
    let left = 0
    let right = 1

    while (right < bank.length) {
        let prev = bank[left].split("0").join("").length
        let next = bank[right].split("0").join("").length

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