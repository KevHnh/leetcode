/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    function dfs(r, c) {
        if (Math.min(r, c) < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === "0") {
            return 0
        }

        grid[r][c] = "0"
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

        return 1
    }

    let ans = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                ans += dfs(i, j)
            }
        }
    }

    return ans
};