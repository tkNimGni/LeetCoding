public class KthLargest {
    SortedDictionary<int, int> numCounts = new SortedDictionary<int, int>();
    int kth;
    
    public KthLargest(int k, int[] nums) {
        kth = k;
        foreach (var n in nums) {
            if (numCounts.ContainsKey(n)) {
                numCounts[n]++;
            } else {
                numCounts[n] = 1;
            }
        }

        // Console.WriteLine($"{string.Join(",", numCounts.Keys)}");
    }
    
    public int Add(int val) {
        if (numCounts.ContainsKey(val)) {
            numCounts[val]++;
        } else {
            numCounts[val] = 1;
        }
        var count = 0;
        var ans = 0;
        foreach (var kvp in numCounts.Reverse()) {
            count += kvp.Value;
            if (count >= kth) {
                ans = kvp.Key;
                break;
            }
        }
        foreach (var kvp in numCounts.Reverse()) {
            count += kvp.Value;
            if (count >= kth) {
                continue;
            }
            numCounts.Remove(kvp.Key);
        }
        return ans;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.Add(val);
 */