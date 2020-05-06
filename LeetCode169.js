/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1
        if ((map[nums[i]] << 1) >= nums.length) return nums[i]
    }
};