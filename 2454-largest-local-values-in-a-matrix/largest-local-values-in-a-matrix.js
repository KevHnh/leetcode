/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let ans = []

    for (let i = 0; i < grid.length - 2; i++) {
        let curr = []
        for (let j = 0; j < grid[0].length - 2; j++) {
            curr.push(Math.max(
                grid[i][j], grid[i][j + 1], grid[i][j + 2],
                grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
                grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]
            ))
        }
        ans.push(curr)
    }

    return ans
};