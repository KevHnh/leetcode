/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
    let row_graph = new Map()
    let col_graph = new Map()

    for (const [above, below] of rowConditions) {
        if (!row_graph.has(above)) {
            row_graph.set(above, [])
        }
        
        row_graph.get(above).push(below)
    }

    for (const [left, right] of colConditions) {
        if (!col_graph.has(left)) {
            col_graph.set(left, [])
        }

        col_graph.get(left).push(right)
    }

    function topSort(graph) {
        let queue = []
        let degrees = Array(k + 1).fill(0)

        for (const neighbors of graph.values()) {
            for (const node of neighbors) {
                degrees[node] += 1
            }
        }

        for (let i = 1; i < k + 1; i++) {
            if (degrees[i] == 0) {
                queue.push(i)
            }
        }

        let orders = new Set()

        while (queue.length) {
            let node = queue.shift()
            orders.add(node)

            for (const to of graph.get(Number(node)) || []) {
                degrees[to] -= 1

                if (!degrees[to]) {
                    queue.push(to)
                }
            }
        }

        if (orders.size === k) return Array.from(orders)

        return -1
    }

    let row = topSort(row_graph)
    let col = topSort(col_graph)

    if (row == -1 || col === -1) return []

    let ans = Array(k).fill(0).map((row) => Array(k).fill(0))
    let map = new Map()

    for (let i = 0; i < row.length; i++) {
        let num = row[i]
        map.set(num, [i, 0])
    }

    for (let i = 0; i < col.length; i++) {
        let num = col[i]
        if (!map.has(num)) {
            map.set(num, [0, i])
        } else {
            const [r, _] = map.get(num)
            map.set(num, [r, i])
        }

    }

    for (const [num, [r, c]] of map.entries()) {
        ans[r][c] = num
    }

    return ans
};