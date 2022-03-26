public class Solution {
    public int Search(int[] nums, int target) {
        var start = 0;
        var end = nums.Length - 1;
        while (start < end) {
            var mid = (start + end) / 2;
            if (nums[mid] > target) {
                end = mid;
            } else if (nums[mid] < target) {
                start = mid;
            } else {
                return mid;
            }
        }
        return -1;
    }
}