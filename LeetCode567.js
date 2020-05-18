/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let len = s1.length
    let check = new Array(26).fill(0)
    let anagram = new Array(26).fill(0)
    for (c of s1) anagram[at(c)]++
    for (let i = 0; i < s2.length; i++) {
        if (i >= len) check[at(s2[i - len])]--
        check[at(s2[i])]++
        if (isEqual(check, anagram)) return true
    }
    return false
}

const at = (str) => {
    return str.charCodeAt(0) - 'a'.charCodeAt(0)
}

const isEqual = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) return false
    }
    return true
}
