/**
 * https://leetcode-cn.com/problems/insertion-sort-list/submissions/
 * 对链表进行插入排序
 * 时间 O(n^2)
 * 空间 O(1)
 */
import { ListNode, createLinkedList, printLinkedlist } from '../helper'
const test = createLinkedList([4,3,2,1])

export function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head

    const dummyHead = new ListNode(-1)
    dummyHead.next = head
    let tail = head, toSort = head.next
    while(toSort) {
        if (toSort.val < tail.val) {
            let pos = dummyHead
            while(pos.next.val < toSort.val) {
                // pos 为最后一个小于 toSort 的位置
                pos = pos.next
            }

            const next = toSort.next
            toSort.next = pos.next
            pos.next = toSort
            tail.next = next
            toSort = next
        } else {
            toSort = toSort.next
            tail = tail.next
        }
    }
    return dummyHead.next
}
