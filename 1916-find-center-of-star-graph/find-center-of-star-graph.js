/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let hash = {}

    for (let [v1, v2] of edges) {
        if (!hash[v1]) {
            hash[v1] = 1
        } else {
            return v1
        }

        if (!hash[v2]) {
            hash[v2] = 1
        } else {
            return v2
        }
    };
}