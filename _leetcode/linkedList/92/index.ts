/**
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */
// 反转链表前 N 个节点
let successor: ListNode | null
function reverseN(head: ListNode | null, n: number): ListNode | null {
    if (n === 1) {
        successor = head.next
        return head
    }

    const rHead = reverseN(head.next, n-1)
    head.next.next = head
    head.next = successor

    return rHead
}

// 反转链表 [m,n]
function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
    if (m === 1) {
        return reverseN(head, n)
    }
    head.next = reverseBetween(head.next, m-1, n-1)
    return head
}