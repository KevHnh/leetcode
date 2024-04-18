/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let ans = 0
    let ROWS = grid.length
    let COLS = grid[0].length

    function dfs(r, c) {
        if (r < 0 || r > ROWS - 1 || c < 0 || c > COLS - 1 || grid[r][c] === 0) {
            ans++
            return
        }

        if (grid[r][c] === 2) {
            return
        }

        grid[r][c] = 2

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j)
            }
        }
    }

    return ans
};