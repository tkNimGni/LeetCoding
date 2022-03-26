public class Solution {
    public int Search(int[] nums, int target) {
        if (nums.Length == 1) {
            return nums[0] == target ? 0 : -1;
        }

        var start = 0;
        var end = nums.Length - 1;
        while (start < end) {
            var mid = (start + end) / 2;
            if (nums[mid] > target) {
                end = mid;
            } else if (nums[mid] < target) {
                start = mid + 1;
                if (start == end) {
                    return nums[start] == target ? start : -1;
                }
            } else {
                return mid;
            }
        }
        return -1;
    }
}