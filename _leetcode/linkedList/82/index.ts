import { ListNode, createLinkedList, printLinkedlist } from '../helper'

// 时间 O(n)
// 空间 O(1)
export function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(-1)
    dummyHead.next = head

    let prev = dummyHead
    let cur = dummyHead.next
    while(cur) {
        let num = 0
        let p: ListNode | null = cur
        while(p && p.val === cur.val) {
            num++
            p = p.next
        }

        if (num > 1) {
            prev.next = p
        } else {
            prev = cur
        }
        cur = p
    }

    return dummyHead.next
}