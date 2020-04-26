/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = []
    for (let j = 0; j <= text2.length; j++) {
        dp[j] = 0
    }
    for (let i in text1) {
        let temp = JSON.parse(JSON.stringify(dp))
        for (let j = 1; j <= text2.length; j++) {
            temp[j] = text1[i] === text2[j - 1] ? dp[j - 1] + 1 : Math.max(dp[j], temp[j - 1])
        }
        dp = temp
    }
    return dp[text2.length]
};

// let testCase = ['c', 'j']
// let testCase = ['abcde', 'ace']
// let testCase = ['bdcaba', 'abcbda']
let testCase = ['pmjghexybyrgzczy', 'hafcdqbgncrcbihkd']
console.log('Input', testCase)
console.time()
let output = longestCommonSubsequence(testCase[0],testCase[1])
console.timeEnd()
console.log('Output', output)