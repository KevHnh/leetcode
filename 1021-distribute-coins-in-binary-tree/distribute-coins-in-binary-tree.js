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
var distributeCoins = function(root) {
    var moves = 0;
    
    function postorder(node){
        if (!node) {
            return 0;
        }
        
        const subTotal = postorder(node.left) + postorder(node.right);
        const result = node.val - 1 + subTotal;
        moves += Math.abs(result);
        
        return result;
            
    }

    postorder(root);
    return moves;
};