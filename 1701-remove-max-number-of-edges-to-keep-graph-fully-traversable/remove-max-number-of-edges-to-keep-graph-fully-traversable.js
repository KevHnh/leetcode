/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
    const alice = new UnionFind(n);
    const bob = new UnionFind(n);
    const both = new UnionFind(n);
    let aliceRemove = 0, bobRemove = 0, bothRemove = 0;

    for (const [type, u, v] of edges) {
        if (type === 3) {
            both.union(u, v) ? (alice.union(u, v), bob.union(u, v)) : bothRemove += 1
        }
    }

    for (const [type, u, v] of edges) {
        if (type === 1)
            !alice.union(u, v) && aliceRemove++
    }

    for (const [type, u, v] of edges) {
        if (type === 2) {
            !bob.union(u, v) && bobRemove++
        }
    }

    if (alice.components > 1 || bob.components > 1) {
        return -1
    }

    return aliceRemove + bobRemove + bothRemove
};

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i)
        this.size = Array(n + 1).fill(1);
        this.components = n
    }

    find(x) {
        return this.parent[x] !== x ? this.parent[x] = this.find(this.parent[x]) : this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x)
        const rootY = this.find(y)

        if (rootX === rootY) return false
        const [smaller, bigger] = this.size[rootX] < this.size[rootY] ? [rootX, rootY] : [rootY, rootX];

        this.size[smaller] += this.size[bigger];
        this.parent[bigger] = smaller;
        this.components -= 1
        return true
    }

}