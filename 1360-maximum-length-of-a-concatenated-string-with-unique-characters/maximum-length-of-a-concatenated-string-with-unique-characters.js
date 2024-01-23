/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let strings = []

    function dfs(curr, index) {
        if (index === arr.length) {
            strings.push(curr.join(""))
            return
        }

        dfs(curr.concat(arr[index]), index + 1)
        dfs(curr, index + 1)
    }

    dfs([], 0)
    let max = 0

    for (let i = 0; i < strings.length; i++) {
        let setSize = new Set(strings[i]).size
        let length = strings[i].length

        if (length === setSize) {
            max = Math.max(length, max)
        }
    }

    return max
};
