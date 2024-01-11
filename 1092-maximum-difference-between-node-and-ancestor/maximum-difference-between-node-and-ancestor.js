/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    let res = -1

    function dfs(root, minVal, maxVal) {
        if (!root) {
            res = Math.max(res, Math.abs(maxVal - minVal))
            return
        }

        let min = Math.min(minVal, root.val)
        let max = Math.max(maxVal, root.val)
        res = Math.max(res, Math.abs(max - min))

        dfs(root.left, min, max)
        dfs(root.right, min, max)
    }

    dfs(root, root.val, root.val)
    return res
};