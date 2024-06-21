/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    let total = 0;

    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            total += customers[i];
            customers[i] = 0;
        }
    }

    let maxIncrease = 0;
    let increase = 0;

    for (let i = 0; i < customers.length; i++) {
        increase += customers[i];
        
        if (i >= minutes) {
            increase -= customers[i - minutes];
        }

        maxIncrease = Math.max(maxIncrease, increase);
    }

    return total + maxIncrease;
};