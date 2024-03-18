/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points = points.sort((a, b) => a[0] - b[0])
    let curr = points[0]
    let ans = 1

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] >= curr[0] && points[i][0] <= curr[1]) {
            curr[1] = Math.min(curr[1], points[i][1])
        }
        else {
            curr = points[i]
            ans++
        }
    }

    return ans
};