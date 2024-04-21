/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    let map = {}

    for (let i = 0; i < edges.length; i++) {
        map[edges[i][0]] ? map[edges[i][0]].push(edges[i][1]) : map[edges[i][0]] = [edges[i][1]]
        map[edges[i][1]] ? map[edges[i][1]].push(edges[i][0]) : map[edges[i][1]] = [edges[i][0]]
    }

    let visited = new Set()

    function dfs(node) {
        visited.add(node)

        if (map[node] !== undefined) {
            for (let child of map[node]) {
                if (!visited.has(child)) {
                    dfs(child)
                }
            }
        }
    }

    dfs(source)
    return visited.has(destination)
};