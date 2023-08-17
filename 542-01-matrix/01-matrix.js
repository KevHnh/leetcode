/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let ROWS = mat.length
    let COLS = mat[0].length
    let q = []

    for (let i = 0; i < ROWS; i++) { 
        for (let j = 0; j < COLS; j++) {
            if (mat[i][j] === 0) {
                q.push([i,j])
            }
            else {
                mat[i][j] = "#"
            }
        }
    }

    let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    for (let [curX, curY] of q) {
        for (let [dirX, dirY] of dir) {
            let newRow = curX + dirX
            let newCol = curY + dirY

            if (Math.min(newRow, newCol) >= 0 && newRow < ROWS && newCol < COLS && mat[newRow][newCol] === "#") {
                mat[newRow][newCol] = mat[curX][curY] + 1
                q.push([newRow, newCol])
            }
        }
    }

    return mat
};