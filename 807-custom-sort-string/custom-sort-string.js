/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let map = {}

    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = Infinity;
        }
    }
    
    s = s.split("");
    return s.sort((a, b) => map[a] - map[b]).join("");
};