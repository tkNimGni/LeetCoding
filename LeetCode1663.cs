public class Solution {
    public string GetSmallestString(int n, int k) {
        // n = 5, k = 73
        //  1,  1,  1,  1,  1
        // 25, 25, 18
        // k - n = 25 * q + r
        // quotient = (k-n) / 25
        // remainder = (k-n) % 25
        var q = (k-n) / 25;
        var r = (k-n) % 25;
        // Console.WriteLine($"{k}-{n} = 25 * {q} + {r}");
        var ans = new StringBuilder();
        for (var i = n - 1; i >= 0; i--) {
            if (i > q) {
                ans.Append('a');
            } else if (i == q) {
                ans.Append((char)('a' + r));
            } else {
                ans.Append('z');
            }
        }
        return ans.ToString();
    }
}