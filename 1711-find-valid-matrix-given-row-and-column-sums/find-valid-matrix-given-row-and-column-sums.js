/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    let m = rowSum.length
    let n = colSum.length
    const arr = Array(m).fill(0).map(() => Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = Math.min(rowSum[i], colSum[j])
            rowSum[i] -= arr[i][j]
            colSum[j] -= arr[i][j]
        }
    }
    
    return arr
};