/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length
    let ans = 0
    for (let i = 0; i < m; i++) ans += matrix[i][0]
    for (let i = 1; i < n; i++) ans += matrix[0][i]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] += matrix[i][j]
                ? Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1])
                : 0
            ans += matrix[i][j]
        }
    }
    return ans
}
