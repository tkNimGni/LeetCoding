/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const counts = {}
    for (const sym of s) counts[sym] = counts[sym] ? counts[sym] + 1 : 1

    return Object.keys(counts)
        .map((key) => ({ sym: key, count: counts[key] }))
        .sort((a, b) => b.count - a.count)
        .reduce((res, { sym, count }) => res + sym.repeat(count), '')
}
