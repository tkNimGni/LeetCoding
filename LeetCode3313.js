/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.unique = new Set()
    this.duplicate = new Set()
    nums.forEach(num => this.add(num))
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    return this.unique.size > 0 ? this.unique.values().next().value : -1
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (this.duplicate.has(value)) return
    if (!this.unique.has(value)) return this.unique.add(value)
    this.unique.delete(value)
    this.duplicate.add(value)
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */