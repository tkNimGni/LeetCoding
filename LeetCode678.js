/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let lo = 0, hi = 0
    for (let c of s) {
        lo += c === '(' ? 1 : -1
        hi += c !== ')' ? 1 : -1
        if (hi < 0) break
        lo = Math.max(lo, 0)
    }
    return lo === 0
};
console.time()
// let testCase = '()'
// let testCase = '(*)'
// let testCase = '((**'
// let testCase = '()**'
let testCase = '*(*(*)*(*)*)*'
console.log("Input", testCase)
console.log("Output", checkValidString(testCase))
console.timeEnd()