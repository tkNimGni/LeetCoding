/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = new Map()

    for (let a of s) {
        hash.set(a, hash.has(a) ? hash.get(a) + 1 : 1)
    }

    for (let i in s) {
        if (hash.get(s[i]) === 1) return +i
    }

    return -1
};