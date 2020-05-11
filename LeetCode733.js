/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc]
    if (color === newColor) return image
    const floodFillRecursive = (sr, sc) => {
        if (image[sr][sc] === color) {
            image[sr][sc] = newColor
            if (sr > 0) floodFillRecursive(sr - 1, sc)
            if (sr + 1 < image.length) floodFillRecursive(sr + 1, sc)
            if (sc > 0) floodFillRecursive(sr, sc - 1)
            if (sc + 1 < image[0].length) floodFillRecursive(sr, sc + 1)
        }
    }
    floodFillRecursive(sr, sc)
    return image
};

const print = (image) => {
    return image.join('\n')
}

testCase = [[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2]
// testCase = [[[0,0,0],[0,1,1]], 1, 1, 1]
console.log(print(testCase[0]) + '\n')
console.log(print(floodFill(testCase[0], testCase[1], testCase[2], testCase[3])))