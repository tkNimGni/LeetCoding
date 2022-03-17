public class Solution {
    public int ScoreOfParentheses(string s) {
        if (s.Length == 2) {
            return 1;
        }

        var cnt = 0;
        for (var i = 0; i < s.Length; i++) {
            cnt = s[i] == '(' ? cnt + 1 : cnt - 1;
            if (cnt == 0 && i != s.Length - 1) {
                return ScoreOfParentheses(s.Substring(0, i + 1)) + ScoreOfParentheses(s.Substring(i + 1));
            }
        }
        return ScoreOfParentheses(s.Substring(1, s.Length - 2)) * 2;
    }
}