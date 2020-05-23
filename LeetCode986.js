/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    if (!A.length || !B.length) return []

    let ans = []
    for (let i = 0; i < A.length; i++) {
        const start = A[i][0]
        const end = A[i][1]

        // A ====
        // B     ====
        if (end <= B[0][0]) {
            if (end === B[0][0]) ans.push([end, end])
            continue
        }

        // A     ====
        // B ====
        while (start > B[0][1]) {
            if (start === B[0][1]) ans.push([start, start])
            B.shift()
            if (!B.length) return ans
        }

        let next = true
        while (end > B[0][0] && next) {
            if (start >= B[0][0]) {
                if (end >= B[0][1]) {
                    // A   ========
                    // B ==== ====
                    ans.push([start, B[0][1]])
                    B.shift()
                    if (!B.length) return ans
                    // A ====
                    // B     ====
                    if (end === B[0][0]) ans.push([end, end])
                } else {
                    // A  ==== ====
                    // B ========
                    ans.push([start, end])
                    next = false
                }
            } else {
                if (end <= B[0][1]) {
                    // A ==== ====
                    // B   ========
                    ans.push([B[0][0], end])
                    next = false
                } else {
                    // A ========
                    // B  ==== ====
                    ans.push([B[0][0], B[0][1]])
                    B.shift()
                    if (!B.length) return ans
                }
            }
        }
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

const testCase = [
    [[14, 16]],
    [
        [7, 13],
        [16, 20],
    ],
]
console.log(intervalIntersection(testCase[0], testCase[1]))
