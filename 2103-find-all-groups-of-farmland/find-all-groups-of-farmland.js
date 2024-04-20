/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    let ROWS = land.length
    let COLS = land[0].length
    let ans = []
    let endRow = 0
    let endCol = 0

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || land[r][c] === 0) {
            return
        }

        endRow = Math.max(endRow, r)
        endCol = Math.max(endCol, c)
        land[r][c] = 0

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (land[i][j] === 1) {
                endRow = 0
                endCol = 0
                dfs(i, j)
                ans.push([i, j, endRow, endCol])
            }
        }
    }

    return ans
};