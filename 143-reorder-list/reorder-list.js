/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let stack = []
    let tail = head

    while (tail) {
        stack.push(tail)
        tail = tail.next
    }

    let len = stack.length

    for (let i = 0; i < len; i++) {
        if (i % 2 === 0) {
            head.next = stack.shift()
        }
        else {
            head.next = stack.pop()
        }

        head = head.next
    }

    head.next = null
};