class Node
{
public:
    Node *left;
    Node *right;
};

class Solution
{
public:
    void insert(int a, Node *root)
    {
        Node *curr = root;

        for (int i = 31; i >= 0; i--)
        {
            int last_bit = (a >> i) & 1;
            if (last_bit == 0)
            {
                if (curr->left == NULL)
                {
                    curr->left = new Node();
                }
                curr = curr->left;
            }
            else
            {
                if (curr->right == NULL)
                {
                    curr->right = new Node();
                }
                curr = curr->right;
            }
        }
        return;
    }

    int max_xor(int a, Node *root, vector<int> nums)
    {
        Node *curr = root;
        int max_xor_val = INT_MIN;
        int curr_xor = 0;
        for (int i = 31; i >= 0; i--)
        {
            int last_bit = (a >> i) & 1;
            if (last_bit == 0)
            {
                // if bit is 0 then we try to look for a bit which is 1 in the trie to maximize xor
                if (curr->right)
                {
                    curr = curr->right;
                    curr_xor += (int)pow(2, i);
                }
                else
                {
                    curr = curr->left;
                }
            }
            else
            {
                // if bit is 1 then we try to look for a bit which is 0 in the trie to maximize xor
                if (curr->left)
                {
                    curr = curr->left;
                    curr_xor += (int)pow(2, i);
                }
                else
                {
                    curr = curr->right;
                }
            }
        }
        max_xor_val = max(curr_xor, max_xor_val);
        return max_xor_val;
    }

    int findMaximumXOR(vector<int> &nums)
    {
        Node *root = new Node();
        int n = nums.size();
        int result = INT_MIN;
        if (n == 0)
        {
            return 0;
        }
        for (int i = 0; i < n; i++)
        {
            insert(nums[i], root);
            int ans = max_xor(nums[i], root, nums);
            result = max(result, ans);
        }
        return result;
    }
};