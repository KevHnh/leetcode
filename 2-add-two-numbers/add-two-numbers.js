/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let q = [[], []]

    while (l1 || l2) {
        if (l1) {
            q[0].unshift(l1.val)
            l1 = l1.next
        }

        if (l2) {
            q[1].unshift(l2.val)
            l2 = l2.next
        }
    }

    let val1 = BigInt(q[0].join(""))
    let val2 = BigInt(q[1].join(""))

    console.log(val1)
    console.log(val2)

    let sum = val1 + val2
    let stringSum = sum.toString().split("")

    let dummy = new ListNode(null)
    let tail = dummy

    console.log(stringSum)

    for (let i = 0; i < stringSum.length; i++) {
        let node = new ListNode(BigInt(stringSum[stringSum.length - i - 1]))
        tail.next = node
        tail = tail.next
    }

    return dummy.next
};