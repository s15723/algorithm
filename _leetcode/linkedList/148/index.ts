/**
 * https://leetcode-cn.com/problems/sort-list/
 * 时间 O(nlogn)
 * 空间 O(1)
 * 归并排序
 */
import { ListNode, createLinkedList, printLinkedlist } from '../helper'

const linkList = createLinkedList([4,2,1,3])

export function sortList(head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(-1)
    dummyHead.next = head

    let p = head, len = 0
    while(p) {
        len++
        p = p.next
    }
    
    for (let size = 1; size <= len; size += size) {
        let tail = dummyHead
        let cur = dummyHead.next
        
        while(cur) {
            const left = cur
            const right = cut(left, size)
            cur = cut(right, size)

            tail.next = merge(left, right)
            while(tail.next) {
                tail = tail.next
            }
        }
    }

    return dummyHead.next
};

function cut(head: ListNode, n: number) {
    let p = head
    while(--n && p) {
        p = p.next
    }

    if (!p) {
        return null
    }

    const next = p.next
    p.next = null
    return next
}

function merge(left: ListNode, right: ListNode) {
    const dummyHead = new ListNode(-1)
    let p = dummyHead
    while(left && right) {
        if (left.val < right.val) {
            p.next = left
            p = p.next
            left = left.next
        } else {
            p.next = right
            p = p.next
            right = right.next
        }
    }
    p.next = left ? left : right
    return dummyHead.next
}

console.log(printLinkedlist(sortList(linkList)))
