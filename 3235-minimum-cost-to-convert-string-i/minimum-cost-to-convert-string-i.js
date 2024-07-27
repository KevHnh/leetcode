/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
    const a = 'a'.charCodeAt(0);
    const dist = new Array(27).fill(0).map(el => new Array(27).fill(Infinity));

    for (let i = 0; i < 26; i++) {
        dist[i][i] = 0;
    }

    const map = new Map();

    for (let i = 0; i < original.length; i++) {
        const s = original[i].charCodeAt(0) - a;
        const e = changed[i].charCodeAt(0) - a;

        if (!map.has(s)) {
            map.set(s, []);
        }

        map.get(s).push([e, cost[i]]);
    }

    function dijkstra(src) {
        dist[src][src] = 0;
        const q = [[src, 0]];

        while (q.length > 0) {
            q.sort((a, b) => a[1] - b[1]);
            const [cur, c] = q.shift();

            if (c > dist[src][cur]) {
                continue;
            }

            dist[src][cur] = c;
            const adj = map.get(cur);

            if (adj) {
                for (const [next, ct] of adj) {
                    if (dist[src][next] > dist[src][cur] + ct) {
                        dist[src][next] = dist[src][cur] + ct;
                        q.push([next, dist[src][next]]);
                    }
                }
            }
        } 
    }

    for (let i = 0; i < 26; i++) {
        dist[i][i] = 0;
        dijkstra(i);
    }

    let res = 0;
    const visited = new Set();
    
    for (let i = 0; i < source.length; i++) {
        if (source[i] !== target[i]) {
            const d = dist[source[i].charCodeAt(0) - a][target[i].charCodeAt(0) - a];
            if (d === Infinity) {
                return -1;
            }
            res += d;
        }
    }

    return res;
};