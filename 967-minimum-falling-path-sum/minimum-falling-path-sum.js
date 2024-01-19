/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let mid = matrix[i - 1][j]
            let left = matrix[i - 1][j - 1] || Infinity
            let right = matrix[i - 1][j + 1] || Infinity

            matrix[i][j] = matrix[i][j] + Math.min(mid, left, right)
        }
    }

    return Math.min(...matrix[matrix.length - 1])
};