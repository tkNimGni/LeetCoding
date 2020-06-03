/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    const mid = costs.length / 2
    return costs
        .sort((costA, costB) => costA[0] - costA[1] - (costB[0] - costB[1]))
        .reduce((acc, cur, i) => {
            if (i < mid) return acc + cur[0]
            else return acc + cur[1]
        }, 0)
}

// let testCase = [
//     [841, 185],
//     [295, 946],
//     [928, 450],
//     [55, 806],
//     [714, 89],
//     [787, 380],
//     [663, 323],
//     [814, 265],
//     [581, 581],
//     [850, 486],
//     [390, 491],
//     [560, 678],
//     [311, 283],
//     [145, 772],
//     [987, 471],
//     [465, 611],
//     [926, 367],
//     [782, 532],
//     [299, 317],
//     [605, 260],
//     [751, 735],
//     [614, 746],
//     [747, 904],
//     [267, 653],
// ]
let testCase = [
    [518, 518],
    [71, 971],
    [121, 862],
    [967, 607],
    [138, 754],
    [513, 337],
    [499, 873],
    [337, 387],
    [647, 917],
    [76, 417],
]
console.log(twoCitySchedCost(testCase))
