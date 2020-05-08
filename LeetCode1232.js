/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true
    const x0 = coordinates[0][0], y0 = coordinates[0][1]
    const n = (y0 === coordinates[1][1]) ? Number.MAX_SAFE_INTEGER : (x0 - coordinates[1][0]) / (y0 - coordinates[1][1])
    for (let i = 2; i < coordinates.length; i++) {
        if (y0 === coordinates[i][1]) {
            if (n !== Number.MAX_SAFE_INTEGER) return false
        } else {
            if (n !== (x0 - coordinates[i][0]) / (y0 - coordinates[i][1])) return false
        }
    }
    return true
};