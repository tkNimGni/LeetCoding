/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = []
    nums = nums.sort()
    for (const i in nums) {
        if (nums[i] === nums[i - 1]) continue
        let hash = new Map()
        for (let j = i; j < nums.length; j++) {
            if (i === j) continue
            if (hash.get(-nums[i] - nums[j])) ans.push([nums[i], -nums[i] - nums[j], nums[j]])
            hash.set(nums[j], j)
        }
    }
    return ans
};

console.time()
// let testCase = [-1,0,1,2,-1,-4]
let testCase = [0,0,0,0]
console.log("Input", testCase)
console.log("Output", threeSum(testCase))
console.timeEnd()