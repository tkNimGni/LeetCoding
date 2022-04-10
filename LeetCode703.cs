public class KthLargest {
    List<int> sorted;
    int kth;

    public KthLargest(int k, int[] nums) {
        sorted = nums.ToList();
        sorted.Sort((a, b) => a - b);
        kth = k;
    }
    
    public int Add(int val) {
        sorted.Add(val);
        sorted.Sort((a, b) => a - b);
        return sorted[sorted.Count - kth];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.Add(val);
 */