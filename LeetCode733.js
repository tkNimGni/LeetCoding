/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc]
    const floodFillRecursive = (sr, sc) => {
        if (sr >= 0 && sr < image.length && sc >= 0 && sc <= image[0].length && image[sr][sc] === color) {
            image[sr][sc] = newColor
            floodFillRecursive(sr - 1, sc)
            floodFillRecursive(sr + 1, sc)
            floodFillRecursive(sr, sc - 1)
            floodFillRecursive(sr, sc + 1)
        }
    }
    floodFillRecursive(sr, sc)
    return image
};

const print = (image) => {
    return image.join('\n')
}

testCase = [[[1,2,1],[1,1,0],[1,0,1]], 1, 1, 2]
console.log(print(testCase[0]) + '\n')
console.log(print(floodFill(testCase[0], testCase[1], testCase[2], testCase[3])))