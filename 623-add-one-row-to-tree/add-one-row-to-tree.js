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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    function dfs(node, curDepth) {
        if (curDepth === depth - 1) {
            const oldLeft = node.left;
            const oldRight = node.right;
            
            node.left = new TreeNode(val, oldLeft);
            node.right = new TreeNode(val, null, oldRight);
        }
        else {
            if (node.left) {
                dfs(node.left, curDepth + 1);
            }

            if (node.right) {
                dfs(node.right, curDepth + 1);
            }
        }

        return node;
    }

    return depth === 1 ? new TreeNode(val, root) : dfs(root, 1);
};