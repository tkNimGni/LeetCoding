public class Solution {
    public string MinRemoveToMakeValid(string s) {
        var ans = s;
        var openIdx = new Stack<int>(); // index of '(' which do not meet ')' yet.
        var rmIdx = new Stack<int>(); // index of s to be removed.
        for (var i = 0; i < s.Length; i++) {
            if (s[i] == '(') {
                openIdx.Push(i);
            } else if (s[i] == ')') {
                if (openIdx.Count() > 0) {
                    openIdx.Pop();
                } else {
                    rmIdx.Push(i);
                }
            }
        }

        var temp = new Stack<int>();
        while (openIdx.Count() > 0) {
            temp.Push(openIdx.Pop());
        }
        while (temp.Count() > 0) {
            rmIdx.Push(temp.Pop());
        }

        while (rmIdx.Count() > 0) {
            var a = rmIdx.Pop();
            Console.WriteLine($"{ans}, {a}");
            ans = ans.Remove(a, 1);
        }
        
        return ans;
    }
}