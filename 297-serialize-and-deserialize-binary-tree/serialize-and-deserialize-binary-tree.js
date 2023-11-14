/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let data = []

    function dfs(root) {
        if (!root) {
            data.push(null)
            return 
        }

        data.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)
    return data
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function dfs() {
        let val = data.shift()

        if (val === null) {
            return null
        }

        let node = new TreeNode(val)
        node.left = dfs()
        node.right = dfs()

        return node
    }   

    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */