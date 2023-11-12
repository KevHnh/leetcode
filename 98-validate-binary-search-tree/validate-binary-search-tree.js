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
 * @return {boolean}
 */
var isValidBST = function (root) {
    function validate(curr, left, right) {
        if (!curr) {
            return true
        }

        if (curr.val <= left || curr.val >= right) {
            return false
        }

        return validate(curr.left, left, curr.val) && validate(curr.right, curr.val, right) 
    }

    return validate(root, -Infinity, Infinity)
};