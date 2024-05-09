/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness = happiness.sort((a,b) => b - a)
    let ans = 0
    let curr = 0

    for (let i = 0; i < happiness.length; i++) {
        if (curr === k) {
            break
        }

        ans += Math.max(happiness[i] - curr, 0)
        curr++
    }

    return ans
};