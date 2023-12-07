/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []

    function dfs(cur, i, total) {
        if (total === target) {
            res.push([...cur]) 
            return
        }

        if (total > target || i >= candidates.length) {
            return
        }

        cur.push(candidates[i])
        dfs(cur, i, total + candidates[i])
        cur.pop()
        dfs(cur, i + 1, total)
    }

    dfs([], 0, 0)
    return res
};