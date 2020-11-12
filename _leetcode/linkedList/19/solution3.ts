import { ListNode } from '../helper'

// 时间 O(n)
// 空间 O(1)
// 双指针，只需遍历一次链表
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummyHead = new ListNode(-1)
    dummyHead.next = head
    let p = dummyHead, q = dummyHead
    for (let i = 0; i < n + 1; i++) {
        q = q.next
    }
    while(q) {
        p = p.next
        q = q.next
    }

    const deleteNode = p.next
    p.next = deleteNode.next
    deleteNode.next = null

    return dummyHead.next
}