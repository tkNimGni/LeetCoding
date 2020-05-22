/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = {}
    let max = Number.MIN_SAFE_INTEGER
    let ans = ''
    for (c of s) map[c] = map[c] ? map[c] + 1 : 1
    for (k in map) max = Math.max(max, map[k])
    while (max > 0) {
        for (k in map) {
            if (map[k] === max) {
                for (let t = 0; t < max; t++) {
                    ans += k
                }
            }
        }
        max--
    }
    return ans
}
