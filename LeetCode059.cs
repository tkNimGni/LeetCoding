public class Solution {
    public int[][] GenerateMatrix(int n) {
        var grid = new int[n][];
        for (var i = 0; i < n; i++) {
            grid[i] = new int[n];
        }
        var dir = new List<List<int>>();
        dir.Add(new List<int>{ 0, 1 });
        dir.Add(new List<int>{ 1, 0 });
        dir.Add(new List<int>{ 0, -1 });
        dir.Add(new List<int>{ -1, 0 });
        var d = 0;

        var cnt = 1;
        var row = 0;
        var col = 0;
        while (cnt <= n * n) {
            grid[row][col] = cnt++;

            var r = (n + row + dir[d][0]) % n;
            var c = (n + col + dir[d][1]) % n;
            if (grid[r][c] != 0) {
                d = (d + 1) % 4;
            }

            row += dir[d][0];
            col += dir[d][1];
        }

        return grid;
    }
}