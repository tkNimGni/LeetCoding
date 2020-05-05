/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}

    for (let a of s) {
        map[a] = map[a] ? map[a] + 1 : 1
    }

    for (let i in s) {
        if (map[s[i]] === 1) return +i
    }

    return -1
};

console.log(firstUniqChar('abab'))