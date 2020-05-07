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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let depthX = undefined, depthY = undefined
    const isCousinsRecursion = (r, xx, yy, depth) => {
        if (depthX <= 1 || depthY <= 1) return false
        if (depthX && depthY) return depthX === depthY
        if (!r) return false
        if (r.val === xx) depthX = depth
        if (r.val === yy) depthY = depth
        return isCousinsRecursion(r.left, xx, yy, depth + 1) || isCousinsRecursion(r.right, xx, yy, depth + 1)
    }
    return isCousinsRecursion(root, x, y, 0)
};