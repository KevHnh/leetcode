/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null
    }

    let root = new TreeNode(preorder[0])
    let rootIndex = inorder.indexOf(preorder[0])

    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex + 1))
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))

    return root
};