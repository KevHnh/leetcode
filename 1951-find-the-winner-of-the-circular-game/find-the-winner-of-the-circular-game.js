/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let queue = []

    for (let i = 1; i <= n; i++) {
        queue.push(i)
    }

    while (queue.length > 1) {
        let deleteCount = k - 1

        while (deleteCount > 0) {
            queue.push(queue.shift())
            deleteCount--
        }

        queue.shift()
    }

    return queue.shift() 
};