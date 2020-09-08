/**
 * 自底向上归并排序链表
 * 
 * 分而治之
 * 
 * 时间 O(nlogn)
 * 空间 O(1)
 * 
 * 5->3->1->2->6->4
 * 
 * 3->5 1->2 4->6
 * 
 * 1->2->3->5 4->6
 * 
 * 1->2->3->4->5->6
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export default function sortList(head: ListNode | null): ListNode | null {
    let dummyHead: ListNode = new ListNode(-1)
    dummyHead.next = head
    let len = 0
    let cur = head
    while (cur) {
        len++
        cur = cur.next
    }

    for (let size = 1; size <= len; size += size) {
        let cur = dummyHead.next
        let tail = dummyHead

        while (cur) {
            const left = cur
            // 切断了 middle 和 middle + 1 的链接
            const right = cut(left, size)
            // 切断右边链表最后一个节点和下一个节点的链接
            cur = cut(right, size)

            tail.next = merge(left, right)
            while (tail.next) {
                tail = tail.next
            }
        }
    }

    return dummyHead.next
}

// 删除 n 个节点，返回剩下的
function cut(head: ListNode, n: number) {
    let cur = head
    while (cur && --n) {
        cur = cur.next
    }

    if (!cur) return null

    let ret = cur.next
    cur.next = null
    return ret
}

function merge(left: ListNode, right: ListNode) {
    let dummyHead: ListNode = new ListNode(-1)
    let cur = dummyHead

    while (left && right) {
        if (left.val < right.val) {
            cur.next = left
            cur = left
            left = left.next
        } else {
            cur.next = right
            cur = right
            right = right.next
        }
    }

    cur.next = left ? left : right

    return dummyHead.next
}
