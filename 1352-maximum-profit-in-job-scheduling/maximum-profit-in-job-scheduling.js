/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    let jobs = []
    let n = profit.length

    for (let i = 0; i < profit.length; i++) {
        jobs.push({"start" : startTime[i], "end" : endTime[i], "profit" : profit[i]})
    }

    jobs.sort((a, b) => a.end - b.end)

    let dp = new Array(n)
    dp[0] = jobs[0].profit

    for (let i = 1; i < profit.length; i++) {
        let task = -1

        for (let j = i - 1; j >= 0; j--) {
            if (jobs[j].end <= jobs[i].start) {
                task = j
                break
            }
        }

        if (task != -1) {
            jobs[i].profit += dp[task]
        }

        dp[i] = Math.max(jobs[i].profit, dp[i - 1])
    }

    return dp[n - 1]
};