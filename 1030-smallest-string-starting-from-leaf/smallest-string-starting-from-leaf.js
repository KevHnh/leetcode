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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let lower = null

    function preOrder(node, actual = "") {
        if (!node) {
            return
        }

        actual = String.fromCharCode(97 + node.val) + actual

        if (!node.left && !node.right) {
            if (!lower || actual <= lower) {
                lower = actual
            }

            return
        }

        preOrder(node.left, actual)
        preOrder(node.right, actual)
    }

    preOrder(root)
    return lower
};