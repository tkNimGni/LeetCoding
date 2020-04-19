/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for (let i in nums) {
        const j = map.get(target - nums[i])
        if (j) return [j, i]
        map.set(nums[i], i)
    }
};