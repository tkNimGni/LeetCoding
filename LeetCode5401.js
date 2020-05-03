/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let arr = []
    for (let i in nums) {
        if (nums[i] === 1) arr.push(+i)
    }
    for (let i in arr) {
        if (+i === arr.length - 1) break
        if (arr[i] + k >= arr[+i + 1]) return false
    }
    return true
};