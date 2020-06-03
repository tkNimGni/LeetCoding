/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    let ans = (cityA = cityB = 0)
    for (cost of costs) {
        if (cost[0] < cost[1]) cityA++
        else cityB++
        ans += Math.min(cost[0], cost[1])
    }
    if (cityA === cityB) return ans

    costs = costs.sort((cityA, cityB) => {
        return Math.abs(cityA[0] - cityA[1]) - Math.abs(cityB[0] - cityB[1])
    })

    for (let i = 0; cityA !== cityB && i < costs.length; i++) {
        const costA = costs[i][0]
        const costB = costs[i][1]
        if (costA === costB) continue
        if (cityA > cityB && costA < costB) {
            ans += costB - costA
            cityA--
            cityB++
        } else if (cityA < cityB && costA > costB) {
            ans += costA - costB
            cityA++
            cityB--
        }
    }
    return ans
}

let testCase = [
    [841, 185],
    [295, 946],
    [928, 450],
    [55, 806],
    [714, 89],
    [787, 380],
    [663, 323],
    [814, 265],
    [581, 581],
    [850, 486],
    [390, 491],
    [560, 678],
    [311, 283],
    [145, 772],
    [987, 471],
    [465, 611],
    [926, 367],
    [782, 532],
    [299, 317],
    [605, 260],
    [751, 735],
    [614, 746],
    [747, 904],
    [267, 653],
]
console.log(twoCitySchedCost(testCase))
