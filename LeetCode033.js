/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for (let i in nums) {
        if (nums[i] === target) return i
    }
    return -1
};

console.time()
let testCase1 = [4,5,6,7,0,1,2]
let testCase2 = 0
console.log("Input", testCase1, testCase2)
console.log("Output", search(testCase1, testCase2))
console.timeEnd()