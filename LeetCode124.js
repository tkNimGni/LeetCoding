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
var maxPathSum = function(root) {
    var ans = Number.MIN_SAFE_INTEGER
    const ms = (root) => {
        if (!root) return 0
        let l = Math.max(0, ms(root.left))
        let r = Math.max(0, ms(root.right))
        let sum = l + r + root.val
        ans = Math.max(ans, sum)
        return Math.max(l, r) + root.val
    }
    ms(root)
    return ans
};