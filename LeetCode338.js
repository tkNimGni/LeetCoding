/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let ans = [0]
    for (let i = 1; i <= num; i++) ans.push(ans[i >> 1] + (i & 1))
    return ans
}
