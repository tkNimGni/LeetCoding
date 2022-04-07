public class Solution {
    public int MaxArea(int[] height) {
        var start = 0;
        var end = height.Length - 1;
        var ans = 0;
        while (start < end) {
            var contain = (end - start) * Math.Min(height[start], height[end]);
            ans = Math.Max(ans, contain);
            if (height[start] < height[end]) {
                start++;
            } else {
                end--;
            }
        }
        return ans;
    }
}