public class Solution {
    public bool ValidPalindrome(string s) {
        var len = s.Length;
        for (var i = 0; i < len / 2; i++) {
            if (s[i] != s[len - i - 1]) {
                var subLen = len - i * 2 - 1;
                return validPalindrome(s.Substring(i, subLen)) || validPalindrome(s.Substring(i + 1, subLen));
            }
        }
        return true;
    }
    bool validPalindrome(string s) {
        for (var i = 0; i < s.Length / 2; i++) {
            if (s[i] != s[s.Length - i - 1]) {
                return false;
            }
        }
        return true;
    }
}