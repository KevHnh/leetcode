/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    let size = arr.length;
    let dp = Array(size + 1).fill(0);

    for (let i = 1; i <= size; i++) {
        let maxCurrent = 0;

        for (let n = 1; n <= k; n++) {
            if (i - n < 0) {
                continue;
            }

            maxCurrent = Math.max(maxCurrent, arr[i - n]);
            dp[i] = Math.max(dp[i], dp[i - n] + maxCurrent * n);
        }
    }

    return dp[size];
};