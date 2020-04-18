/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid.length) return 0
    if (!grid[0].length) return 0
    for (const r in grid) {
        for (const c in grid[r]) {
            if (r === '0' && c === '0') continue
            let up = r > 0 ? grid[r - 1][c] : Infinity
            let left = c > 0 ? grid[r][c - 1] : Infinity
            grid[r][c] += Math.min(up, left)
        }
    }
    return grid[grid.length - 1][grid[0].length - 1]
};

console.time()
// let testCase = [[1,3,1],[1,5,1],[4,2,1]]
let testCase = [[1,2,5],[3,2,1]]
console.log("Input", testCase)
console.log("Output", minPathSum(testCase))
console.timeEnd()