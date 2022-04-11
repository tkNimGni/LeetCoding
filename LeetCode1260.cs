public class Solution {
    public IList<IList<int>> ShiftGrid(int[][] grid, int k) {
        var m = grid.Length;
        var n = grid[0].Length;
        if (k % (m * n) == 0) {
            return grid;
        }

        var ans = new List<IList<int>>();
        for (var i = 0; i < m; i++) {
            var list = new List<int>();
            for (var j = 0; j < n; j++) {
                list.Add(0);
            }
            ans.Add(list);
        }

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                var current = i * n + j;
                var newPos = (current + k) % (m * n);
                var newI = newPos / n;
                var newJ = newPos % n;
                ans[newI][newJ] = grid[i][j];
            }
        }
        
        return ans;
    }
}