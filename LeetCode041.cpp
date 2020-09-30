class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int size = nums.size();
        for (int i = 0; i < size; i++) {
            const int num = nums[i];
            if (num > 0 && num <= size && num != nums[num - 1]) {
                int temp = num;
                nums[i] = nums[num - 1];
                nums[num - 1] = temp;
                i--;
            }
        }
        
        for (int i = 0; i < size; i++) {
            if (i + 1 != nums[i]) return i + 1;
        }
        return size + 1;
    }
};