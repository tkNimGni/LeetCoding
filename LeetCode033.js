/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2)
        if (nums[m] === target) return m
        if (nums[m] >= nums[l]) {
            if (nums[l] <= target && nums[m] > target) r = m - 1
            else l = m + 1
        } else {
            if (nums[m] < target && nums[r] >= target) l = m + 1
            else r = m - 1
        }
    }
    return -1
};

console.time()
let testCase1 = [4,5,6,7,0,1,2]
let testCase2 = 0
console.log("Input", testCase1, testCase2)
console.log("Output", search(testCase1, testCase2))
console.timeEnd()