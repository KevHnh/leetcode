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
var balanceBST = function (root) {
    const values = toArray(root);

    function toBST(arr) {
        if (arr.length === 0) return null;
        if (arr.length === 1) return new TreeNode(arr[0]);
        const mid = Math.floor(arr.length / 2);
        const left = toBST(arr.slice(0, mid));
        const right = toBST(arr.slice(mid + 1));
        return new TreeNode(arr[mid], left, right);
    }

    function toArray(node) {
        if (!node) return [];
        return [...toArray(node.left), node.val, ...toArray(node.right)];
    }

    return toBST(values);
};