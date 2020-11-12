import { ListNode, createLinkedList, printLinkedlist } from '../helper'
const test = createLinkedList([1])
// O(n)
// 不用快慢指针
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null) {return null}
    let len = 0
    let cur = head
    let oldHead = head, oldTail = head
    while (cur) {
        len++
        oldTail = cur
        cur = cur.next
    }
    // 旋转 k 步
    k = k % len
    if (k === 0) {
        return head
    }
    let newHead = head
    let newTail = head
    for (let i = 0; i < len - k - 1; i++) {
        newTail = newTail.next
    }
    newHead = newTail.next
    oldTail.next = oldHead
    newTail.next = null

    return newHead
}

console.log(printLinkedlist(rotateRight(test, 0)))
