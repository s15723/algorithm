import { ListNode, createLinkedList, printLinkedlist } from '../helper'

// 每 k 个节点翻转链表
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let a = head,
        b = head
    for (let i = 0; i < k; i++) {
        // 不足 k 个元素不翻转，返回当前链表的头
        if (b === null) {
            return head
        }
        b = b.next
    }

    const newHead = reverse(a, b)
    a.next = reverseKGroup(b, k)
    return newHead
}

function reverse(a: ListNode, b: ListNode): ListNode {
    let prev = null, cur = a
    while(cur !== b) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}
