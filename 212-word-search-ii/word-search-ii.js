/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let root = buildTrie(words)
    let res = []

    function dfs(node, i, j) {
        if (node.word) {
            res.push(node.word)
            node.word = null
        }

        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1 || !node[board[i][j]]) {
            return
        }


        let c = board[i][j]

        board[i][j] = "#"
        dfs(node[c], i + 1, j)
        dfs(node[c], i, j + 1)
        dfs(node[c], i - 1, j)
        dfs(node[c], i, j - 1)
        board[i][j] = c
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(root, i, j)
        }
    }

    return res
};

function buildTrie(words) {
    let root = {}

    for (let word of words) {
        let node = root

        for (let char of word) {
            if (!node[char]) {
                node[char] = {}
            }

            node = node[char]
        }

        node.word = word
    }

    return root
}