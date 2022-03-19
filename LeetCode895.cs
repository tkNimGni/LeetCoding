public class FreqStack {
    // [5,7,5,7,4,5]
    private Dictionary<int, Stack<int>> valIdxStack = new Dictionary<int, Stack<int>>(); // value -> index
    private List<HashSet<int>> freqValues = new List<HashSet<int>>(); // freqValues[i] -> values with freq i
    private Stack<int> stack = new Stack<int>();
    
    public FreqStack() {
        freqValues.Add(new HashSet<int>()); // freq 0
    }
    
    public void Push(int val) {
        stack.Push(val);
        if (!valIdxStack.ContainsKey(val)) {
            valIdxStack[val] = new Stack<int>();
        }
        valIdxStack[val].Push(stack.Count);

        updateFreq(val, valIdxStack[val].Count);
        // Console.WriteLine($"Push: {val}(freq: {valIdxStack[val].Count}). Max: {string.Join(",", freqValues[freqValues.Count - 1].ToArray())}(freq: {freqValues.Count - 1})");
    }

    void updateFreq(int val, int freq) {
        // remove from old freq
        if (freq > 0) {
            freqValues[freq - 1].Remove(val);
        }
        if (freqValues.Count > freq + 1) {
            freqValues[freq + 1].Remove(val);
            if (freqValues[freq + 1].Count == 0) {
                freqValues.RemoveAt(freq + 1);
            }
        }
        
        // add to new freq
        while (freqValues.Count == freq) {
            freqValues.Add(new HashSet<int>());
        }
        freqValues[freq].Add(val);
    }

    public int Pop() {
        var lastIdx = 0;
        var popVal = 0;
        foreach (var maxFreqValue in freqValues[freqValues.Count - 1]) {
            if (valIdxStack[maxFreqValue].Last() > lastIdx) {  
                lastIdx = valIdxStack[maxFreqValue].Last();
                popVal = maxFreqValue;
            }
        }
        valIdxStack[popVal].Pop();
        updateFreq(popVal, valIdxStack[popVal].Count);
        // Console.WriteLine($"Pop: {popVal}(freq: {valIdxStack[popVal].Count}). Max: {string.Join(",", freqValues[freqValues.Count - 1].ToArray())}(freq: {freqValues.Count - 1})");

        while (stack.Count > 0  && valIdxStack[stack.Peek()].Count > 0 && stack.Count == valIdxStack[stack.Peek()].Last()) {
            stack.Pop();
        }
        return popVal;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.Push(val);
 * int param_2 = obj.Pop();
 */