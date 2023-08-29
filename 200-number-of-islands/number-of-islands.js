/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ROWS = grid.length
    let COLS = grid[0].length
    let res = 0

    function dfs(r, c) {
        if (Math.min(r, c) < 0 || r >= ROWS || c >= COLS || grid[r][c] === "0") {
            return 0
        }

        grid[r][c] = "0"
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

        return 1
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === "1") {
                res += dfs(i, j)
            }
        }
    }
    return res
};