import {
    ListNode,
    createLinkedList,
    printLinkedlist,
} from '../../linkedList/helper'

const l1 = createLinkedList([1, 3, 5, 6])
const l2 = createLinkedList([2, 4, 7])
// 时间 O(n)
// 空间 O(1)
export function mergeTwoLists(l1: ListNode, l2: ListNode) {
    if (!l1 || !l2) {
        return l1 ? l1 : l2
    }

    const dummyHead = new ListNode(-1)
    let tail = dummyHead
    let p1 = l1,
        p2 = l2
    while (p1 && p2) {
        if (p1.val < p2.val) {
            tail.next = p1
            p1 = p1.next
        } else {
            tail.next = p2
            p2 = p2.next
        }
        tail = tail.next
    }
    tail.next = p1 ? p1 : p2
    return dummyHead.next
}

console.log(printLinkedlist(mergeTwoLists(l1, l2)))
