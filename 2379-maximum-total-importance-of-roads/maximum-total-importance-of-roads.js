/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
    let deg = new Array(n).fill(0);

    for (let e of roads) {
        deg[e[0]]++;
        deg[e[1]]++;
    }

    deg.sort((a, b) => a - b);
    let ans = 0;
    
    for (let i = 0; i < n; i++) {
        ans += (i + 1) * deg[i];
    }
    return ans;
};