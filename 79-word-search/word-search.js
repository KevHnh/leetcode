/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    function dfs(row, col, i) {
        if (i === word.length) {
            return true
        }

        if (Math.min(row, col) < 0 || row >= board.length || col >= board[0].length || board[row][col] !== word[i]) {
            return false
        }

        board[row][col] = null
        let res = dfs(row + 1, col, i + 1) ||
            dfs(row - 1, col, i + 1) ||
            dfs(row, col + 1, i + 1) ||
            dfs(row, col - 1, i + 1)
        board[row][col] = word[i]

        return res
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) {
                    return true
                }
            }
        }
    }

    return false
};