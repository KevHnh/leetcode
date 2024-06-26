/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    const n = grid.length
    const m = grid[0].length;
    let res = Infinity;
    const dp = new Array(n).fill().map(() => new Array(m).fill(-1));

    for (let j = 0; j < m; ++j) {
        dp[0][j] = grid[0][j];
    }

    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            let temp = Infinity;

            for (let k = 0; k < m; ++k) {
                if (j !== k) {
                    temp = Math.min(temp, grid[i][j] + dp[i - 1][k]);
                }
            }

            dp[i][j] = temp;
        }
    }

    for (let j = 0; j < m; ++j) {
        res = Math.min(res, dp[n - 1][j]);
    }

    return res;
};