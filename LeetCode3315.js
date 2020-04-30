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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
    return (!root || root.val !== arr[0]) ? false : (arr.length === 1) ? !(root.left || root.right) : (root.left || root.right) ? (isValidSequence(root.left, arr.slice(1)) || isValidSequence(root.right, arr.slice(1))) : false

    // readable ↓
    if (!root) return false
    if (root.val === arr[0]) {
        if (arr.length === 1) {
            return !(root.left || root.right)
        } else if (root.left || root.right) {
            return isValidSequence(root.left, arr.slice(1)) || isValidSequence(root.right, arr.slice(1))
        } else {
            return false
        }
    }
    return false
};