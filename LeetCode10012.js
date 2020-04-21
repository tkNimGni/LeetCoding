/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    const [row, column] = binaryMatrix.dimensions()
    let left = 0, right = column
    while (left < right) {
        const y = Math.floor((left + right) / 2)
        let hasOne = false
        for (let x = 0; x < row && !hasOne; x++) {
            hasOne = binaryMatrix.get(x, y) === 1
        }
        if (hasOne) right = y
        else left = y + 1
    }
    return right !== column ? right : -1
};

// let testCase = [
//     [0,0,0],
//     [0,0,1],
//     [1,1,1],
//     [0,1,1]
// ]