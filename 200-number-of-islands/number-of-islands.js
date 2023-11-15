/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    function dfs(row, col) {
        if (Math.min(row, col) < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") {
            return 0
        }

        grid[row][col] = "0"
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)

        return 1
    }

    let ans = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                ans += dfs(i, j, 0)
            }
        }
    }

    return ans
};