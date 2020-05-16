/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
    let max = (curMax = min = curMin = sum = A[0])

    for (let i = 1; i < A.length; i++) {
        curMax = Math.max(A[i], A[i] + curMax)
        max = Math.max(max, curMax)

        curMin = Math.min(A[i], A[i] + curMin)
        min = Math.min(min, curMin)

        sum += A[i]
    }

    return min === sum ? max : Math.max(max, sum - min)
}
