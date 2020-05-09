/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true
    let l = 1, r = num
    while (l < r) {
        const m = Math.floor((l + r) / 2)
        if (m ** 2 === num) return true
        else if (m ** 2 > num) r = m
        else l = m + 1
    }
    return false
};