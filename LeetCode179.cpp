class Solution {
public:
    string largestNumber(vector<int>& nums) {
        if (nums.empty()) return "";
        sort(nums.begin(), nums.end(), [](const int a, const int b) {
            return ((to_string(a) + to_string(b)) > (to_string(b) + to_string(a)));
        });
        if (!nums[0]) return "0";

        string largestNum;
        for (auto num : nums) {
            largestNum += to_string(num);
        }
        return largestNum;
    }
};