/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let win = {}
    let lose = {}
    let winArr = []
    let loseArr = []

    for (let i = 0; i < matches.length; i++) {
        win[matches[i][0]] ? win[matches[i][0]]++ : win[matches[i][0]] = 1
        lose[matches[i][1]] ? lose[matches[i][1]]++ : lose[matches[i][1]] = 1
    }

    win = Object.entries(win)

    for (let i = 0; i < win.length; i++) {
        if (!lose[win[i][0]]) {
            winArr.push(win[i][0])
        }
    }

    lose = Object.entries(lose)

    for (let i = 0; i < lose.length; i++) {
        if (lose[i][1] === 1) {
            loseArr.push(lose[i][0])
        }
    }

    return [winArr, loseArr]
};