public class Solution {
    private Stack<char> cStack_ = new Stack<char>();
    public bool IsValid(string s) {
        foreach (var c in s) {
            if (c == '(' || c == '[' | c == '{') {
                cStack_.Push(c);
                continue;
            }

            var valid = cStack_.Peek() == '(' && c == ')';
            valid |= cStack_.Peek() == '[' && c == ']';
            valid |= cStack_.Peek() == '{' && c == '}';
            if (valid) {
                cStack_.Pop();
                continue;
            }
            
            return false;
        }
        return cStack_.Count() == 0;
    }
}