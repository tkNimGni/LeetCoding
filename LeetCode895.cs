public class FreqStack {
    Dictionary<int, int> freq = new Dictionary<int, int>(); // value -> frequency
    Dictionary<int, Stack<int>> freqStack = new Dictionary<int, Stack<int>>(); // frequency -> stack of values
    int maxFreq = 0;
    
    public FreqStack() { }
    
    public void Push(int val) {
        freq[val] = freq.ContainsKey(val) ? freq[val] + 1 : 1;
        maxFreq = Math.Max(maxFreq, freq[val]);
        if (!freqStack.ContainsKey(freq[val])) freqStack[freq[val]] = new Stack<int>();
        freqStack[freq[val]].Push(val);
    }

    public int Pop() {
        int val = freqStack[maxFreq].Pop();
        freq[val]--;
        if (freqStack[maxFreq].Count == 0) maxFreq--;
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.Push(val);
 * int param_2 = obj.Pop();
 */