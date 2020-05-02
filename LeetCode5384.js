/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    let arr = new Array()
    for (let i in candies) arr[i] = candies[i] + extraCandies >= max ? true : false
    return arr
};