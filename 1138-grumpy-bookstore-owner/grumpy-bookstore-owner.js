/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    let ans = 0;
    let total = 0;
    const n = customers.length;

    for (let i = 0; i < n; i++) {
        total += (1 - grumpy[i]) * customers[i];
    }

    let windowAll = 0;
    let windowPartial = 0;

    for (let i = 0; i < n; i++) {
        windowAll += customers[i];
        windowPartial += (1 - grumpy[i]) * customers[i];
        
        if (i + 1 >= minutes) {
            ans = Math.max(ans, total - windowPartial + windowAll);
            let left = i - minutes + 1;
            windowAll -= customers[left];
            windowPartial -= (1 - grumpy[left]) * customers[left];
        }
    }

    return ans;
};