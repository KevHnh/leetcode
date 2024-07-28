/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
    const graph = {};
    for (let i = 0; i < n; i++) graph[i] = [];

    for (let [a, b] of edges) {
        graph[a - 1].push(b - 1);
        graph[b - 1].push(a - 1);
    }

    const travelTimes = Array(n).fill().map(() => [Infinity, Infinity]);
    travelTimes[0] = [0, 2];

    const queue = [[0, 0, 2]];

    while (queue.length > 0) {
        const [currentNode, ct1, ct2] = queue.shift();

        for (let neighbor of graph[currentNode]) {

            const [t1, t2] = travelTimes[neighbor];

            let arr = [ct1 + 1, ct2 + 1, t1, t2];
            arr.sort((a, b) => a - b);
            let arrSet = [...new Set(arr)];
            const newT1 = arrSet[0];
            const newT2 = arrSet.length === 1 ? newT1 + 2 : arrSet[1];

            if (newT1 === t1 && newT2 === t2) {
                continue;
            } else {
                travelTimes[neighbor] = [newT1, newT2];
                queue.push([neighbor, ...travelTimes[neighbor]]);
            }

        }
    }

    let ans = time;
    const [_, secondMin] = travelTimes[n - 1];

    for (let i = 1; i < secondMin; i++) {
        if (Math.floor(ans / change) % 2 === 0) {
            // Green light
        } else {
            // Red light
            const multiplier = Math.floor(ans / change) + 1;
            ans = ans + ((multiplier * change) - ans);
        }
        ans = ans + time;
    }

    return ans;
};