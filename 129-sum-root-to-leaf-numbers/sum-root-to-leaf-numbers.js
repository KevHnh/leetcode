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
var sumNumbers = function(root) {
    let ans = 0
    
    function dfs(node, curr) {
        if (!node) {
            return
        }

        curr.push(node.val)

        if (!node.left && !node.right) {
            ans += Number(curr.join(""))
            curr.pop()
            return
        }

        
        dfs(node.left, curr)
        dfs(node.right, curr)
        curr.pop()
    }

    dfs(root, [])

    return ans
};