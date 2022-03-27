public class Solution {
    public int[] KWeakestRows(int[][] mat, int k) {
        var dic = new Dictionary<int, Queue<int>>();
        var m = mat.Length;
        var n = mat[0].Length;
        for (var i = 0; i < m; i++) {
            var s = 0;
            for (var j = 0; j < n && mat[i][j] == 1; j++) {
                s++;
            }
            if (!dic.ContainsKey(s)) {
                dic[s] = new Queue<int>();
            }
            dic[s].Enqueue(i);
        }

        var ans = new int[k];
        var soldiers = 0;
        var idx = 0;
        while (idx < k) {
            while (dic.ContainsKey(soldiers) && dic[soldiers].Count > 0) {
                ans[idx] = dic[soldiers].Dequeue();
                idx++;
            }
            soldiers++;
        }
        return ans;
    }
}