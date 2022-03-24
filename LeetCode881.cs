public class Solution {
    public int NumRescueBoats(int[] people, int limit) {
        var list = people.ToList();
        list.Sort((a, b) => a - b);

        var start = 0;
        var end = list.Count - 1;
        var ans = 0;
        while (start <= end) {
            if (list[start] + list[end] <= limit) {
                start++;
            }
            end--;
            ans++;
        }
        return ans;
    }
}