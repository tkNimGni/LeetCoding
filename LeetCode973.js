/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    return points
        .map((point) => {
            return { point: point, dis: point[0] ** 2 + point[1] ** 2 }
        })
        .sort((a, b) => {
            return a.dis - b.dis
        })
        .slice(0, K)
        .map((point) => {
            return point.point
        })
}
