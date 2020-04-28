/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.queue = []
    this.hash = new Map()
    nums.forEach(num => this.add(num))
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    const unique = this.queue.find(num => this.hash.get(num) === 1)
    return unique ? unique : -1
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (this.hash.has(value)) {
        this.hash.set(value, this.hash.get(value) + 1)
    } else {
        this.hash.set(value, 1)
        this.queue.push(value)
    }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */