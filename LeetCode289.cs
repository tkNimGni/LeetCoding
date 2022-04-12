public class Solution {
    public void GameOfLife(int[][] board) {
        // live: live == 2, 3
        // live: live < 2 → dead
        // live: live > 3 → dead
        // dead: live == 3 → live
        var m = board.Length;
        var n = board[0].Length;
        var newBoard = new int[m, n];

        int isAlive(int i, int j) {
            if (i < 0 || i >= m || j < 0 || j >= n) {
                return 0;
            }
            return board[i][j];
        }

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                var live = 0;
                live += isAlive(i + -1, j + -1);
                live += isAlive(i + -1, j +  0);
                live += isAlive(i + -1, j +  1);
                live += isAlive(i +  0, j + -1);
                live += isAlive(i +  0, j +  1);
                live += isAlive(i +  1, j + -1);
                live += isAlive(i +  1, j +  0);
                live += isAlive(i +  1, j +  1);

                if (isAlive(i, j) == 1) {
                    newBoard[i, j] = live == 2 || live == 3 ? 1 : 0;
                } else {
                    newBoard[i, j] = live == 3 ? 1 : 0;
                }
            }
        }

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                board[i][j] = newBoard[i, j];
            }
        }
    }
}