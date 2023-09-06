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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = []
    let curr = root

    while (stack || curr) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }

        curr = stack.pop()
        k--

        if (k === 0) {
            return curr.val
        }

        curr = curr.right
    }
};