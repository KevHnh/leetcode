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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
    const getPath = (node, value, acc = '') => {
        if (node === null) {
            return '';
        } else if (node.val === value) {
            return acc;
        } else {
            return getPath(node.left, value, acc + 'L') + getPath(node.right, value, acc + 'R')
        }
    }

    let startPath = getPath(root, startValue);
    let destPath = getPath(root, destValue);

    let i = 0;
    for (; i < startPath.length && i < destPath.length && startPath[i] === destPath[i]; i++);

    let output = '';
    for (let j = i; j < startPath.length; j++) {
        output += 'U';
    }

    return output + destPath.substring(i);
};