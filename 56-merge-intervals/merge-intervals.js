/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let res = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        let prev = res[res.length - 1]

        if (prev[1] < intervals[i][0]) {
            res.push(intervals[i])
        }
        else {
            prev[1] = Math.max(prev[1], intervals[i][1])
        }
    }

    return res
};