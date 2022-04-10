public class KthLargest {
    Dictionary<int, int> numCounts = new Dictionary<int, int>();
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
    }
    
    public int Add(int val) {
        if (numCounts.ContainsKey(val)) {
            numCounts[val]++;
        } else {
            numCounts[val] = 1;
        }
        var count = 0;
        var keys = numCounts.Keys.ToList();
        keys.Sort((a, b) => b - a);
        foreach (var k in keys) {
            count += numCounts[k];
            if (count >= kth) {
                return k;
            }
        }
        return -1;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.Add(val);
 */