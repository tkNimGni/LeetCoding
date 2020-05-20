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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let arr = []

    const traversal = (root) => {
        if (!root) return
        if (root.left) traversal(root.left)
        if (root.val !== null) arr.push(root.val)
        if (root.right) traversal(root.right)
    }

    traversal(root)

    return arr[k - 1]
}
