/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let ROWS = grid.length
    let COLS = grid[0].length
    let ans = 0

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === "0") {
            return
        }

        grid[r][c] = "0"
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === "1") {
                dfs(i, j)
                ans++
            }
        }
    }

    return ans
};