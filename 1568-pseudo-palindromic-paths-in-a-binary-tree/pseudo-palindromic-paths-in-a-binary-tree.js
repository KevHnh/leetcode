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
var pseudoPalindromicPaths = function (root) {
    let count = 0
    let digits = new Array(10).fill(true)

    function dfs(node) {
        if (!node) {
            return
        }

        digits[node.val] = !digits[node.val]

        if (!node.left && !node.right) {
            if (digits.filter((num) => num === false).length <= 1) {
                count++
            }

            digits[node.val] = !digits[node.val]
            return
        }

        dfs(node.left)
        dfs(node.right)

        digits[node.val] = !digits[node.val]
    }

    dfs(root)
    return count
}