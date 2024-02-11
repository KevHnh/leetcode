/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    let rows = grid.length
    let cols = grid[0].length
    let dp = [...Array(rows)].map(x => [...Array(cols)].map(y => Array(cols)))

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = Math.min(i, cols - 2); j >= 0; j--) {
            for (let k = Math.max(cols - i - 1, j + 1); k < cols; k++) {
                let best = 0
                
                for (let m = -1; m < 2; m++) {
                    for (let n = -1; n < 2; n++) {
                        best = Math.max(best, ~~dp[i + 1]?.[j + m]?.[k + n])
                    }
                }

                dp[i][j][k] = grid[i][j] + grid[i][k] + best
            }
        }
    }

    return dp[0][0][cols - 1]
};