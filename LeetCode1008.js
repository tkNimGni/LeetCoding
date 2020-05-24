/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    if (!preorder.length) return null

    const [root, ...rest] = preorder

    const rootNode = new TreeNode(root)
    rootNode.left = bstFromPreorder(rest.filter((n) => n < root))
    rootNode.right = bstFromPreorder(rest.filter((n) => n > root))

    return rootNode
}

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

function PreorderTraversal(bst) {
    let arr = []
    const traversal = (bst) => {
        if (bst) {
            arr.push(bst.val)
            traversal(bst.left)
            traversal(bst.right)
        }
    }
    traversal(bst)
    return arr
}

const testCase = [8, 5, 1, 7, 10, 12]
console.log('Input', testCase)
console.time()
const output = bstFromPreorder(testCase)
console.timeEnd()
console.log('Output', PreorderTraversal(output))
