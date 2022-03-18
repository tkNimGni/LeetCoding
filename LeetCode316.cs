public class Solution {
    public string RemoveDuplicateLetters(string s) {
        var lastIdx = new int[26];
        for (var i = 0; i < s.Length; i++) {
            lastIdx[s[i] - 'a'] = i;
        }

        var seen = new bool[26];
        var stack = new Stack<char>();

        for (int i = 0; i < s.Length; i++) {
            var curr = s[i] - 'a';
            if (seen[curr]) {
                continue;
            }
            while (stack.Count > 0 && stack.Peek() - 'a' > curr && i < lastIdx[stack.Peek() - 'a']) {
                seen[stack.Pop() - 'a'] = false;
            }
            stack.Push((char)('a' + curr));
            seen[curr] = true;
        }

        var reverse = string.Empty;
        while (stack.Count > 0) {
            reverse += stack.Pop();
        }
        
        char[] ans = reverse.ToCharArray();
        Array.Reverse(ans);
        return new string(ans);
    }
}