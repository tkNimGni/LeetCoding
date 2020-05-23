/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    let ans = []
    let i = 0
    let j = 0

    while (i < A.length && j < B.length) {
        let lo = Math.max(A[i][0], B[j][0])
        let hi = Math.min(A[i][1], B[j][1])
        if (lo <= hi) ans.push([lo, hi])
        if (A[i][1] < B[j][1]) i++
        else j++
    }

    return ans
}

// const testCase = [
//     [
//         [0, 2],
//         [5, 10],
//         [13, 23],
//         [24, 25],
//     ],
//     [
//         [1, 5],
//         [8, 12],
//         [15, 24],
//         [25, 26],
//     ],
// ]

// const testCase = [[[5, 10]], [[3, 10]]]

// const testCase = [
//     [[14, 16]],
//     [
//         [7, 13],
//         [16, 20],
//     ],
// ]

const testCase = [
    [
        [4, 35],
        [39, 47],
        [50, 57],
        [58, 66],
        [85, 91],
    ],
    [
        [1, 7],
        [16, 17],
        [35, 49],
        [53, 57],
        [58, 70],
        [75, 80],
        [86, 90],
    ],
]

console.log(intervalIntersection(testCase[0], testCase[1]))
