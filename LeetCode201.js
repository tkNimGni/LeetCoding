/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    while (m < n) n &= (n - 1)
    return n
};

console.time()
// let testCase = [8, 15]
let testCase = [0, 2147483647]
console.log("Input", testCase)
console.log("Output", rangeBitwiseAnd(testCase[0], testCase[1]))
console.timeEnd()