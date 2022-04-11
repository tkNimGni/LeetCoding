public class Solution {
    public IList<IList<int>> ShiftGrid(int[][] grid, int k) {
        var m = grid.Length;
        var n = grid[0].Length;
        if (k % (m * n) == 0) {
            return grid;
        }

        var ans = new List<IList<int>>();
        for (var i = 0; i < m; i++) {
            ans.Add(new List<int>(grid[i]));
        }

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                var pos = i * n + j;
                var newPos = (pos + k) % (m * n);
                var newI = newPos / n;
                var newJ = newPos % n;
                ans[newI][newJ] = grid[i][j];
            }
        }
        
        return ans;
    }
}