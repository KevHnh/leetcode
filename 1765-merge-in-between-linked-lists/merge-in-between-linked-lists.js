/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let prev = list1
    let temp1 = list1
    let curr = list1

    a--;

    while (temp1 && a-- > 0) {
        temp1 = temp1.next;
        prev = temp1;
    }

    temp1 = list1;

    while (temp1 && b-- > 0) {
        temp1 = temp1.next;
        curr = temp1;
    }

    let temp2 = list2;

    while (temp2.next !== null) {
        temp2 = temp2.next;
    }

    prev.next = list2;
    temp2.next = curr.next;

    return list1;
};