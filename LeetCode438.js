/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let len = p.length
    let check = new Array(26).fill(0)
    let anagram = new Array(26).fill(0)
    let ans = []
    for (c of p) anagram[at(c)]++
    for (let i = 0; i < s.length; i++) {
        if (i >= len) check[at(s[i - len])]--
        check[at(s[i])]++
        if (isEqual(check, anagram)) ans.push(i - len + 1)
    }
    return ans
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
