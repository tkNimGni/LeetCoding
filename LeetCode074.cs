public class Solution {
    public bool SearchMatrix(int[][] matrix, int target) {
        var rowIndex = 0;

        if (matrix.Length > 1) {
            for (var i = 1; i < matrix.Length; i++) {
                if (target > matrix[i][0]) {
                    rowIndex = i;
                } else if (target < matrix[i][0]) {
                    break;
                } else {
                    return true;
                }
            }
        }

        if (matrix[0].Length == 1) {
            return matrix[rowIndex][0] == target;
        }

        var s = 0;
        var e = matrix[0].Length - 1;
        while (s < e) {
            var p = (s + e) / 2;
            if (target > matrix[rowIndex][p]) {
                s = p + 1;
                if (s == e) {
                    return target == matrix[rowIndex][s];
                }
            } else if (target < matrix[rowIndex][p]) {
                e = p;
            } else {
                return true;
            }
        }

        return false;
    }
}