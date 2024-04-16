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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    if (depth === 1) {
        let newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    let queue = [root];
    let level = 0;

    while (queue.length !== 0) {
        level += 1
        let numNodes = queue.length;

        for (let i = 0; i < numNodes; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            if (level === depth - 1) {
                let newLeft = new TreeNode(val);
                let newRight = new TreeNode(val);
                newLeft.left = node.left;
                newRight.right = node.right;
                node.left = newLeft;
                node.right = newRight;

            }
        }
    }
    
    return root;
};