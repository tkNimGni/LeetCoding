/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans = 1
    const m = grid.length
    const n = grid[0].length
    for (let r in grid) {
        for (let c in grid[r]) {
            const checkAround = (i, j) => {
                if (grid[i][j] === '0') return
                if (grid[i][j] === '1') {
                    grid[i][j] = ans.toString()
                    if (i - 1 >= 0) checkAround(i - 1, j)
                    if (j - 1 >= 0) checkAround(i, j - 1)
                    if (j + 1 < n) checkAround(i, j + 1)
                    if (i + 1 < m) checkAround(i + 1, j)
                }
            }
            if (grid[r][c] === '1') ans++
            checkAround(+r, +c)
        }
    }
    return ans - 1
};

console.time()
let testCase = [
    ["0","0","1","0","0","0","0"],
    ["1","0","1","0","1","1","0"],
    ["0","1","0","1","1","0","1"],
    ["0","1","1","1","1","0","0"],
    ["0","0","0","1","0","0","0"],
    ["0","0","1","0","1","1","0"],
    ["1","1","1","0","0","0","1"]
]
// [["0","0","1","0","0","0","0"],["1","0","1","0","1","1","0"],["0","1","0","1","1","0","1"],["0","1","1","1","1","0","0"],["0","0","0","1","0","0","0"],["0","0","1","0","1","1","0"],["1","1","1","0","0","0","1"]]
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
// let testCase = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ]
// let testCase = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]
console.log("Input", testCase)
console.log("Output", numIslands(testCase))
console.timeEnd()