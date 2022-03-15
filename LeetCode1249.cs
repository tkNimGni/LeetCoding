public class Solution {
    public string MinRemoveToMakeValid(string s) {
        var ans = string.Empty;
        var openIdx = new Stack<int>(); // index of '(' which do not meet ')' yet.
        var rmIdx = new HashSet<int>(); // index of s to be removed.
        for (var i = 0; i < s.Length; i++) {
            if (s[i] == '(') {
                openIdx.Push(i);
            } else if (s[i] == ')') {
                if (openIdx.Count() > 0) {
                    openIdx.Pop();
                } else {
                    rmIdx.Add(i);
                }
            }
        }

        while (openIdx.Count() > 0) {
            rmIdx.Add(openIdx.Pop());
        }

        for (var i = 0; i < s.Length; i++) {
            if (!rmIdx.Contains(i)) {
                ans += s[i];
            }
        }
        return ans;
    }
}