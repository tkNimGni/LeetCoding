/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let mask = Number.MAX_SAFE_INTEGER
    while ((m & mask) != (n & mask)) {
        mask <<= 1
    }
    return m & mask
};

console.time()
// let testCase = [8, 15]
let testCase = [0, 2147483647]
console.log("Input", testCase)
console.log("Output", rangeBitwiseAnd(testCase[0], testCase[1]))
console.timeEnd()