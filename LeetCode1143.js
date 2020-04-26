/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text1 === text2) return text1.length
    let dp = new Array(text2.length + 1).fill(0)
    for (let i in text1) {
        let prev = 0
        for (let j = 1; j <= text2.length; j++) {
            let temp = dp[j]
            dp[j] = text1[i] === text2[j - 1] ? prev + 1 : Math.max(dp[j], dp[j - 1])
            prev = temp
        }
    }
    return dp[text2.length]
};

// let testCase = ['c', 'j']
// let testCase = ['abcde', 'ace']
// let testCase = ['bdcaba', 'abcbda']
// let testCase = ['pmjghexybyrgzczy', 'hafcdqbgncrcbihkd']
let testCase = ['bsbininm', 'jmjkbkjkv']
console.log('Input', testCase)
console.time()
let output = longestCommonSubsequence(testCase[0],testCase[1])
console.timeEnd()
console.log('Output', output)