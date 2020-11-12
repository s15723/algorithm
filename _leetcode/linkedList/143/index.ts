import { ListNode } from '../helper'

function reorderList(head: ListNode | null): void {
    if (head === null) return

    let middle = middleNode(head)
    let l1 = head
    let l2 = middle.next
    middle.next = null
    l2 = reverse(l2)
    merge(l1, l2)
};

function middleNode(head: ListNode): ListNode {
    let slow = head, fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

function reverse(head: ListNode): ListNode {
    let prev = null, cur = head
    while(cur) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}

function merge(l1: ListNode, l2: ListNode) {
    while(l1 && l2) {
        const l1Tmp = l1.next
        const l2Tmp = l2.next
    
        l1.next = l2
        l1 = l1Tmp
        
        l2.next = l1
        l2 = l2Tmp
    }
    // 不需要这个操作，因为最后一个 l2 已经连上了剩下的所有 l1
    // 和数组不一样，数组需要我们手动将剩下的数组推入
    // l2.next = l1
}
