/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function (nums) {
    if (nums.length === 1) return true;
    if (nums.includes(1)) return false;
    
    const mx = Math.max(...nums) + 1;
    const sieve = Array.from({ length: mx }, (_, i) => i);

    for (let i = 4; i < mx; i += 2) {
        sieve[i] = 2;
    }

    for (let i = 3; i < Math.ceil(Math.sqrt(mx)); i++) {
        if (sieve[i] !== i) continue;
        for (let j = i * i; j < mx; j += i) {
            if (sieve[j] === j) {
                sieve[j] = i;
            }
        }
    }

    function* factorize(num) {
        while (num !== 1) {
            yield sieve[num];
            num = Math.floor(num / sieve[num]);
        }
    }

    const g = new Map();
    const seen = new Set();

    for (const num of new Set(nums)) {
        for (const p of factorize(num)) {
            if (!g.has(num)) g.set(num, new Set());
            if (!g.has(p)) g.set(p, new Set());
            g.get(num).add(p);
            g.get(p).add(num);
        }
    }

    const dq = [nums[0]];
    seen.add(nums[0]);

    while (dq.length) {
        const num = dq.shift();
        for (const nxt of g.get(num)) {
            if (seen.has(nxt)) continue;
            seen.add(nxt);
            dq.push(nxt);
        }
    }

    return seen.size === g.size;
};