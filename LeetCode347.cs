public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        var numCount = new Dictionary<int, int>();
        var countNums = new Dictionary<int, HashSet<int>>();

        foreach (var n in nums) {
            if (numCount.ContainsKey(n)) {
                numCount[n]++;
            } else {
                numCount[n] = 1;
            }

            var count = numCount[n];
            if (countNums.ContainsKey(count)) {
                countNums[count].Add(n);
            } else {
                countNums[count] = new HashSet<int>() { n };
            }
            if (count > 1) {
                countNums[count - 1].Remove(n);
            }
        }
        
        var ans = new List<int>();
        var keys = countNums.Keys.ToList();
        keys.Reverse();
        foreach (var key in keys) {
            if (ans.Count < k) {
                ans.AddRange(countNums[key]);
            } else {
                break;
            }
        }

        return ans.ToArray();
    }
}