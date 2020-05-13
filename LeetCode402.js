/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length <= k) return "0"
    for (let i = 0; i < k; i++) {
        if (num === "0") return num
        let flag = true
        for (let j = 0; j < num.length - 1; j++) {
            if (+num[j] > +num[j + 1]) {
                flag = false
                num = num.slice(0, j) + num.slice(j + 1)
                while (num[0] === "0" && num.length > 1) num = num.slice(1)
                break
            }
        }
        if (flag) num = num.slice(0, num.length - 1)
    }
    return num
};