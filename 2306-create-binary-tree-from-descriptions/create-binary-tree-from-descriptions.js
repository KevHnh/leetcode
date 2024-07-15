/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  let nodes = new Map()
  let children = new Set();

  for (let [parent, child, isLeft] of descriptions) {
    let parentNode = nodes.get(parent) || new TreeNode(parent);
    
    if (!nodes.has(parent)) nodes.set(parent, parentNode);
    
    let childNode = nodes.get(child) || new TreeNode(child);
    
    if (!nodes.has(child)) nodes.set(child, childNode);
    
    if (isLeft) parentNode.left = childNode;
    else parentNode.right = childNode;
    
    children.add(child);
  }

  for (let [parent, child, isLeft] of descriptions) {
    if (!children.has(parent)) return nodes.get(parent);
  }
};