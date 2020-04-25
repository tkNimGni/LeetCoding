/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true
    if (nums[0] === 0) return false
    let reach = 0
    for (let i in nums) {
        if (+i <= reach) {
            reach = Math.max(reach, +i + nums[i])
            if (reach >= nums.length - 1) return true
        } else {
            return false
        }
    } 
};

// let testCase = [1,2,1,0,1,2,3,0,2,0,0]
// let testCase = [2,3,1,1,4]
let testCase = [3,2,1,0,4]
console.log("Input", testCase)
console.time()
let output = canJump(testCase)
console.timeEnd()
console.log("Output", output)