public class Solution {
    public int BrokenCalc(int startValue, int target) {
        var ans = 0;
        while (target > startValue) {
            ans++;
            if (target % 2 == 1) {
                target++;
            } else {
                target /= 2;
            }
        }
        return ans + startValue - target;
    }
}