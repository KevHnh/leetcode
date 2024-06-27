/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let map = {}

    for (let i = 0; i < edges.length; i++) {
        map[edges[i][0]] ? map[edges[i][0]]++ : map[edges[i][0]] = 1 
        map[edges[i][1]] ? map[edges[i][1]]++ : map[edges[i][1]] = 1 
    }

    let center = Object.entries(map).sort((a,b) => b[1] - a[1])

    return center[0][0]
};