/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 */
// 迭代
function reverseList(head: ListNode | null): ListNode | null {
    let cur: ListNode | null = head
    let prev: ListNode | null = null

    while (cur !== null) {
        let next: ListNode | null = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}

// 递归
function reverseListRecursive(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head
    }

    const rhead = reverseList(head.next)
    head.next.next = head
    head.next = null

    return rhead
}