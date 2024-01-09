/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let seq1 = []
    let seq2 = []

    function dfs(node, num) {
        if (!node) {
            return
        }

        if (!node.left && !node.right) {
            if (num === 1) {
                seq1.push(node.val)
            }
            else {
                seq2.push(node.val)
            }
        }

        dfs(node.left, num)
        dfs(node.right, num)
    }

    dfs(root1, 1)
    dfs(root2, 2)

    console.log(seq1)
    console.log(seq2)

    return seq1.join(",") === seq2.join(",")
};