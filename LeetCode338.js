/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let ans = [0]
    if (num === 0) return ans
    for (let n = (pre = 1); n <= num; n++) {
        if (n === pre << 1) pre = n
        ans.push(1 + ans[n - pre])
    }
    return ans
}
