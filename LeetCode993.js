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
    let depth = undefined, parent = undefined
    const isCousinsRecursion = (r, p, xx, yy, d) => {
        if (r.val === xx || r.val === yy) {
            if (depth) {
                return depth === d && parent !== p
            } else {
                depth = d
                parent = p
            }
        }
        let left = r.left ? isCousinsRecursion(r.left, r.val, xx, yy, d + 1) : false
        let right = r.right ? isCousinsRecursion(r.right, r.val, xx, yy, d + 1) : false
        return left || right
    }
    return isCousinsRecursion(root, root.val, x, y, 0)
};