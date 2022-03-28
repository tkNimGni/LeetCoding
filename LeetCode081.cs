public class Solution {
    public bool Search(int[] nums, int target) {
        if (nums.Length == 1) {
            return nums[0] == target;
        }
        if (nums.Length == 2) {
            return nums[0] == target || nums[1] == target;
        }

        // nums = [2,5,6,0,0,1,2], target = 0
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1] 2

        // var s = 0;
        // var e = nums.Length - 1;
        // while (s + 1 != e) {
        //     var p = (s + e) / 2;
        //     if (nums[e] >= nums[p] && nums[p] >= nums[s]) {
        //         break;
        //     } else if (nums[p] >= nums[s] && nums[s] >= nums[e]) {
        //         s = p;
        //     } else if (nums[s] >= nums[e] && nums[e] >= nums[p]) {
        //         e = p;
        //     }
        // }
        var n = nums[0];
        var start = 0;
        for (var i = 1; i < nums.Length; i++) {
            if (nums[i] < n) {
                start = i;
                break;
            }
        }
        var end = start + nums.Length - 1;

        // var start = e;
        // var end = nums.Length + s;
        while (start < end) {
            var p = (start + end) / 2;
            var pp = p % nums.Length;
            // Console.WriteLine($"#{start}, #{end}, #{pp}");
            // Console.WriteLine($"start: #{start}({nums[start]}), end: #{end % nums.Length}({nums[end % nums.Length]}), p: #{pp}({nums[pp]})");
            if (target < nums[pp]) {
                end = p;
            } else if (target > nums[pp]) {
                start = p + 1;
                if (start == end) {
                    return target == nums[start % nums.Length];
                }
            } else {
                return true;
            }
        }

        return false;
    }
}