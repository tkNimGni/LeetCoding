/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (A, B) {
    if (A.join('') === B.join('')) return A.length
    let dp = new Array(B.length + 1).fill(0)
    for (let i = 0; i < A.length; i++) {
        let prev = 0
        for (let j = 1; j <= B.length; j++) {
            let temp = dp[j]
            dp[j] = A[i] === B[j - 1] ? prev + 1 : Math.max(dp[j], dp[j - 1])
            prev = temp
        }
    }
    return dp[B.length]
}
