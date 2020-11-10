import { ListNode } from '../helper'
// 时间 O(len(l1)+len(l2))
// 空间 O(1)
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(-1)
    let p = dummyHead
    let p1 = l1
    let p2 = l2
    while(p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            p.next = p1
            p1 = p1.next
        } else {
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }

    if (p1 !== null) {
        p.next = p1
    } else {
        p.next = p2
    }

    return dummyHead.next
}