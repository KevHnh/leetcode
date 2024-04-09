/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let times = 0;
    let i = 0;
    
    while (tickets[k] > 0) {
        if (tickets[i] > 0) {
            tickets[i]--;
            times++;
        }

        if (i == tickets.length - 1) {
            i = 0;
        } else {
            i++;
        }
    }

    return times;
};