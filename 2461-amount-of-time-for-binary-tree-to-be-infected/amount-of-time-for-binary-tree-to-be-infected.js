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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    let undirected = {}

    function toUndirectedGraph(root) {
        if (!root) return;

        if (!undirected[root.val]) {
            undirected[root.val] = [];
        }

        if (root.left) {
            undirected[root.val].push(root.left.val);
            if (!undirected[root.left.val]) {
                undirected[root.left.val] = [];
            }
            undirected[root.left.val].push(root.val);
            toUndirectedGraph(root.left);
        }

        if (root.right) {
            undirected[root.val].push(root.right.val);
            if (!undirected[root.right.val]) {
                undirected[root.right.val] = [];
            }
            undirected[root.right.val].push(root.val);
            toUndirectedGraph(root.right);
        }
    }

    toUndirectedGraph(root)

    if (Object.entries(undirected).length === 0) {
        return 0
    }

    let ans = 0
    let visited = new Set
    let queue = [start]

    while (queue.length) {
        let len = queue.length

        for (let i = 0; i < len; i++) {
            let curr = queue.shift()
            visited.add(curr)
            
            for (let i = 0; i < undirected[curr].length; i++) {
                if (!visited.has(undirected[curr][i])) {
                    queue.push(undirected[curr][i])
                }
            }
        }

        if (queue.length) {
            ans++
        }
    }

    return ans
};