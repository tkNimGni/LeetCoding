public class Solution {
    public void ReverseString(char[] s) {
        if (s.Length == 1) {
            return;
        }

        var length = s.Length;
        var halfLen = length / 2;
        for (var i = 0; i < halfLen; i++) {
            var temp = s[i];
            s[i] = s[length - i - 1];
            s[length - i - 1] = temp;
        }
    }
}