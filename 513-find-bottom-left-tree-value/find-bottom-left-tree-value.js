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
var findBottomLeftValue = function (root) {
    const res = [0, 0];
    dfs(root, 0, res);
    return res[0];
};

function dfs(root, level, res) {
    if (!root) {
        return;
    }

    if (level === res[1]) {
        res[0] = root.val;
        res[1] = level + 1;
    }

    dfs(root.left, level + 1, res);
    dfs(root.right, level + 1, res);
}