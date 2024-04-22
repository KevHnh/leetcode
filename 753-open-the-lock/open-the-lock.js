/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    if (deadends.includes('0000')) {
        return -1
    }

    const visited = new Set(deadends)

    const queue = [['0000', 0]]
    visited.add('0000')

    while (queue.length) {
        const [curr, count] = queue.shift()

        if (curr === target) {
            return count
        }

        for (let i = 0; i < 4; i++) {
            const c = curr[i]

            let up = Number(c) + 1
            let down = Number(c) - 1

            if (up === 10) {
                up = '0'
            }

            if (down === -1) {
                down = '9'
            }

            const next = curr.substring(0, i) + up + curr.substring(i + 1)
            const prev = curr.substring(0, i) + down + curr.substring(i + 1)

            if (!visited.has(next)) {
                visited.add(next)
                queue.push([next, count + 1])
            }

            if (!visited.has(prev)) {
                visited.add(prev)
                queue.push([prev, count + 1])
            }
        }
    }

    return -1
};