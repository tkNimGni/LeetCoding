/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true
    const x0 = coordinates[0][0]
    const y0 = coordinates[0][1]
    let n = undefined
    for (let i = 1; i < coordinates.length; i++) {
        const x = coordinates[i][0]
        const y = coordinates[i][1]
        if (n !== undefined) {
            if ((x - x0) / (y - y0) !== n) return false
        } else {
            n = (y - y0) !== 0 ? (x - x0) / (y - y0) : 1
        }
    }
    return true
};
