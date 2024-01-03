/**
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = (bank) =>
    bank
        .map((str) => str.split("0").join("").length)
        .filter((val) => val !== 0)
        .reduce((acc, cur, ind, arr) => acc + cur * (arr[ind + 1] || 0), 0);