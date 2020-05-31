/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const len1 = word1.length
    const len2 = word2.length

    let dp = Array(len1 + 1)
        .fill(null)
        .map(() => Array(len2 + 1).fill(0))
    // let dp = new Array(len1 + 1).fill(new Array(len2 + 1).fill(0)) // why...

    for (let i = 0; i < len1 + 1; i++) dp[i][0] = i
    for (let i = 0; i < len2 + 1; i++) dp[0][i] = i

    for (let i = 1; i < len1 + 1; i++) {
        for (let j = 1; j < len2 + 1; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
            )
        }
    }
    return dp[len1][len2]
}
