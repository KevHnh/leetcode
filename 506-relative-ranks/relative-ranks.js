/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted = [...score]
    sorted = sorted.sort((a,b) => b - a)

    let map = {}

    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) {
            map[sorted[i]] = "Gold Medal"
        }
        else if (i === 1) {
            map[sorted[i]] = "Silver Medal"
        }
        else if (i === 2) {
            map[sorted[i]] = "Bronze Medal"
        }
        else {
            map[sorted[i]] = `${i + 1}`
        }
    }

    let ans = []

    for (let i = 0; i < score.length; i++) {
        ans.push(map[score[i]])
    }

    return ans
};