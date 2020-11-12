/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 时间 O(n)
 * 空间 O(1)
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}
export function swapPairs(head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(-1)
    dummyHead.next = head
    let p = dummyHead
    while(p.next && p.next.next) {
        const node1 = p.next
        const node2 = node1.next
        const next: ListNode | null  = node2.next

        p.next = node2
        node2.next = node1
        node1.next = next
        p = node1
    }

    return dummyHead.next
};
