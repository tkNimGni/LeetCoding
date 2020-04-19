/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = []
    nums = nums.sort()
    for (const i in nums) {
        const first = nums[i]
        if (first === nums[i - 1]) continue
        let hash = new Map(), used = new Map()
        for (let j = i; j < nums.length; j++) {
            if (i === j) continue
            const second = nums[j]
            const third = -(first + second)
            if (hash.get(third) && !used.has(third)) {
                ans.push([first, third, second])
                used.set(third, true)
            }
            hash.set(second, j)
        }
    }
    return ans
};

console.time()
let testCase = [-1,0,1,2,-1,-4]
// let testCase = [0,0,0,0]
console.log("Input", testCase)
console.log("Output", threeSum(testCase))
console.timeEnd()