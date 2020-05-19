var StockSpanner = function () {
    this.stock = []
    this.head = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.stock.push(price)
    const len = this.stock.length

    if (this.stock.length) {
        let cur = len - 1
        const origin = this.stock[cur]

        while (origin >= this.stock[cur - 1]) cur = this.head[cur - 1]

        this.head.push(cur)
    } else this.head.push(0)

    return len - this.head[len - 1] // (len - 1) - this.head[len - 1] + 1
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
