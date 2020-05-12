/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const length = nums.length
    
    if (nums[0] !== nums[1]) return nums[0]
    if (nums[length - 1] !== nums[length - 2]) return nums[length - 1]
    
    let l = 0, r = length - 1
    while (l < r) {
        let m = Math.floor((l + r) / 2)
        if ((m % 2 === 0 && nums[m] === nums[m + 1]) ||
            (m % 2 === 1 && nums[m] === nums[m - 1])) {
            l = m + 1
        } else {
            r = m
        }
    }

    return nums[l]
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])) // 2
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])) // 10