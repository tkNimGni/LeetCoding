class Solution {
public:
    int rob(vector<int>& nums) {
        vector<int> rb(nums.size(), -1);
        return rob(nums, nums.size() - 1, rb);
    }
    
    int rob(vector<int>& nums, int i, vector<int>& rb) {
        if (i < 0) return 0;
        if (i == 0) return nums[0];
        if (rb[i] > -1) return rb[i];
        rb[i] = std::max(rob(nums, i - 1, rb), nums[i] + rob(nums, i - 2, rb));
        return rb[i];
    }
};