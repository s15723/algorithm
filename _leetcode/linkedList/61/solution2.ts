import { ListNode } from '../helper'

// 使用快慢指针
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null) {return null}
    let len = 0
    let cur = head
    while (cur) {
        len++
        cur = cur.next
    }
    k = k % len
    let slow = head, fast = head
    for (let i = 0; i < k; i++) {
        fast = fast.next
    }
    while(fast.next) {
        slow = slow.next
        fast = fast.next
    }

    fast.next = head
    const newHead = slow.next
    slow.next = null

    return newHead
};
