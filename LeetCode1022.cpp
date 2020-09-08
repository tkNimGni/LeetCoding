/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int sumRootToLeaf(TreeNode* root) {
        return recursiveSum(root);
    }
    
    int recursiveSum(TreeNode* node, int last = 0) {
        if (node == nullptr) return 0;
        
        int sum = (last << 1) + node->val;
        if (node->left || node->right) {
            return recursiveSum(node->left, sum) + recursiveSum(node->right, sum);
        } else {
            return sum;
        }
    }
};