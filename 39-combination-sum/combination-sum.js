/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []

    function dfs(i, cur, total) {
        if (total === target) {
            res.push([...cur])
            return
        }

        if (total > target || i > candidates.length - 1) {
            return
        }

        cur.push(candidates[i])
        dfs(i, cur, total + candidates[i])
        cur.pop()
        dfs(i + 1, cur, total)
    }

    dfs(0, [], 0)
    return res
};