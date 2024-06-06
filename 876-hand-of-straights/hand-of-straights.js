/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    let map = {};

    for (let card of hand) {
        map[card] = (map[card] || 0) + 1;
    }

    let sortedCards = Object.keys(map).map(Number).sort((a, b) => a - b);

    for (let card of sortedCards) {
        if (map[card] > 0) {
            let count = map[card];
            
            for (let i = 0; i < groupSize; i++) {
                if ((map[card + i] || 0) < count) {
                    return false;
                }
                map[card + i] -= count;
            }
        }
    }

    return true;
};