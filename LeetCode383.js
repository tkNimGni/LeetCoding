/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hash = new Map()
    for (let w of magazine) {
        hash.set(w, hash.has(w) ? hash.get(w) + 1 : 1)
    }
    for (let r of ransomNote) {
        if (!hash.has(r) || hash.get(r) === 0) return false
        hash.set(r, hash.get(r) - 1)
    }
    return true
};

let testCase = ['aa', 'aba']
console.log('Input', testCase)
console.time()
let output = canConstruct(testCase[0], testCase[1])
console.timeEnd()
console.log('Output', output)