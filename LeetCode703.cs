public class KthLargest {
    PriorityQueue<int, int> pq = new();
    int kth;
    
    public KthLargest(int k, int[] nums) {
        kth = k;
        foreach(var i in nums)
        {
            Add(i);
        }
    }
    
    public int Add(int val) {
        pq.Enqueue(val, val);
        if (pq.Count > kth) {
            pq.Dequeue();
        }
        return pq.Peek();
    }
}


/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.Add(val);
 */