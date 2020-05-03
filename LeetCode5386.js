/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    let arr1 = [], arr2 = []
    for (let i = 0; i < s1.length; i++) {
        arr1[i] = s1.charCodeAt(i) - ('a').charCodeAt(0)
        arr2[i] = s2.charCodeAt(i) - ('a').charCodeAt(0)
    }
    arr1 = arr1.sort()
    arr2 = arr2.sort()
    for (let i in arr1) {
        if (arr1[i] > arr2[i]) return false
    }
    return true
};