public class Solution {
    public int TwoCitySchedCost(int[][] costs) {
        var list = costs.ToList();
        list.Sort((a, b) => (a[0] - b[0]) - (a[1] - b[1]));

        var ans = 0;
        for (var i = 0; i < list.Count; i++) {
            ans += i * 2 < list.Count ? list[i][0] : list[i][1];
        }

        return ans;
    }
}