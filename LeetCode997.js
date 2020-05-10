/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let trusted = new Map()
    let beTrusted = new Map()
    for (let i = 0; i < trust.length; i++) {
        trusted.set(trust[i][0], true)
        beTrusted.set(trust[i][1], beTrusted.has(trust[i][1]) ? beTrusted.get(trust[i][1]) + 1 : 1)
    }
    for (let i = 1; i <= N; i++) {
        if (!trusted.has(i) && beTrusted.get(i) === N - 1) return i
    }
    return -1
};

const testCase = [1, []]
console.log(findJudge(testCase[0], testCase[1]))