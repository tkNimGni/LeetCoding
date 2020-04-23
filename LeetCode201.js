/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let ans = n
    for (let i = m; i < n; i++) {
        ans &= i
    }
    return ans
};

console.time()
// let testCase = [4, 7]
let testCase = [0, 2147483647]
console.log("Input", testCase)
console.log("Output", rangeBitwiseAnd(testCase[0], testCase[1]))
console.timeEnd()