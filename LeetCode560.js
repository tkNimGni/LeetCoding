/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let num = 0, dp = []
    for (let i = 0; i < nums.length; i++) {
        dp[i] = []
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            dp[j - i][j] = i === 0 ? nums[j] : dp[j - i][j - i] + dp[j - i + 1][j]
            num += dp[j - i][j] === k ? 1 : 0
        }
    }
    // console.table(dp)
    return num
};

console.time()
// let testCase = [[1,1,1], 2]
let testCase = [[-3,2,4,-6,2,3], 2]
console.log("Input", testCase)
console.log("Output", subarraySum(testCase[0], testCase[1]))
console.timeEnd()