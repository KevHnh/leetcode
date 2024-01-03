/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let ans = 0
    let row = 0

    for (let i = 0; i < bank.length; i++) {
        let curr = bank[i].split("0").join("").length

        if (curr !== 0 && i === 0) {
            row = curr
            continue
        }

        if (curr === 0) {
            continue
        }
        else {
            ans += row * curr
            row = curr
            curr = 0
        }

        console.log("ANS: ", ans)
        console.log("ROW: ", row)
        console.log("CURR: ", curr)
        console.log("----------")
    }

    return ans
};