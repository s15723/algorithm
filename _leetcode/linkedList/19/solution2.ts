import { ListNode } from '../helper'

// 时间 O(n)
// 空间 O(1)
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return null

    let len = 0
    let p = head
    while(p) {
        len++
        p = p.next
    }

    let m = len - n + 1

    const dummyHead = new ListNode(-1)
    dummyHead.next = head
    let q = dummyHead
    while(--m) {
        q = q.next
    }
    let deleteNode = q.next
    q.next = deleteNode.next
    deleteNode.next = null
    
    return dummyHead.next
}