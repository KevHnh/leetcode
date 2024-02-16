/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    let map = {};

    for (let num of arr) {
        map[num] ? map[num]++ : (map[num] = 1);
    }

    let pq = new MinPriorityQueue();

    for (let count of Object.values(map)) {
        pq.enqueue(count, count);
    }

    while (k > 0 && !pq.isEmpty()) {
        let count = pq.dequeue().element;
        if (k >= count) {
            k -= count;
        } else {
            pq.enqueue(count - k, count - k);
            k = 0;
        }
    }

    return pq.size();
};