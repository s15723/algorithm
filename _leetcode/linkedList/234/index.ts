// 时间 O(n)
// 空间 O(1)
import { ListNode } from '../helper'

export function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return true
    let slow = head,
        fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    if (fast) {
        slow = slow.next
    }
    slow = reverse(slow)

    let p = head
    while (slow) {
        if (p.val !== slow.val) {
            return false
        }
        p = p.next
        slow = slow.next
    }
    return true
}

function reverse(head: ListNode) {
    let prev = null
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}
