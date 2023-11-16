/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        let rightArr = arr.slice(i + 1) 
        let rightMax = Math.max(...rightArr)

        res.push(rightMax === -Infinity ? -1 : rightMax)
    }

    return res
};