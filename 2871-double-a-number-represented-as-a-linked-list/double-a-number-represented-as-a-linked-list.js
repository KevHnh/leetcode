/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
    let arr = []
    let curr = head

    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }

    let carry = 0
    let len = arr.length

    for (let i = len - 1; i >= 0; i--) {
        carry += 2 * arr[i]
        arr[i] = carry % 10
        carry = Math.trunc(carry / 10)
    }

    if (carry) arr.unshift(carry)

    let dummy = null
    let tail = null

    for (let i = 0; i < arr.length; i++) {
        let curr = new ListNode(parseFloat(arr[i]))

        if (dummy) {
            tail.next = curr
            tail = tail.next
        }
        else {
            tail = dummy = curr
        }
    }

    return dummy
};