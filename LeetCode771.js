/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let ans = 0, jSet = new Set(J)
    for (let s of S) ans += jSet.has(s) ? 1 : 0
    return ans
};

let testCase = ['aA', 'aAAbbbb']
console.log('Input', testCase)
console.time()
let output = numJewelsInStones(testCase[0], testCase[1])
console.timeEnd()
console.log('Output', output)