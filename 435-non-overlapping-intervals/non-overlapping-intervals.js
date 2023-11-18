/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let ans = 0
    let prevEnd = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        if (prevEnd <= intervals[i][0]) {
            prevEnd = intervals[i][1]
        }
        else {
            ans++
            prevEnd = Math.min(prevEnd, intervals[i][1])
        }
    }

    return ans
};