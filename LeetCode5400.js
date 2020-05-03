/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let hash = new Map()
    for (let path of paths) {
        hash.set(path[0], path[1])
    }
    for (let city of hash) {
        if (!hash.has(city[1])) return city[1]
    }
};