/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let ans = 0, hash = new Map()
    for (let j of J) hash.set(j, true)
    for (let s of S) ans += hash.has(s) ? 1 : 0
    return ans
};

let testCase = ['aA', 'aAAbbbb']
console.log('Input', testCase)
console.time()
let output = numJewelsInStones(testCase[0], testCase[1])
console.timeEnd()
console.log('Output', output)