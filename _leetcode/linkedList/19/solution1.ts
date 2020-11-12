import { ListNode, createLinkedList, printLinkedlist } from '../helper'

// 时间 O(n)
// 空间 O(1)
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return null

    const newHead = reverse(head)

    const dummyHead = new ListNode(-1)
    dummyHead.next = newHead
    let p = dummyHead
    while(--n) {
        p = p.next
    }
    let deleteNode = p.next
    p.next = deleteNode.next
    deleteNode.next = null

    return reverse(dummyHead.next)
};

function reverse(head: ListNode | null): ListNode {
    let prev = null, cur = head
    while(cur) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}
