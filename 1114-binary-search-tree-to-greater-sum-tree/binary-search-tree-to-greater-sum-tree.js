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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    let acc = 0;

    function dfs(node) {
        if (!node) { 
            return;
        }

        dfs(node.right);
        acc += node.val;
        node.val = acc;
        dfs(node.left);
    }

    dfs(root);

    return root;
};