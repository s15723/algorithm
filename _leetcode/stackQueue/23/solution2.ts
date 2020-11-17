/**
 * 分而治之，递归
 */
import { mergeTwoLists } from './mergeTwoLists'
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    return merge(lists, 0, lists.length - 1)
}

// 合并 [l...r] 的链表
export function merge(lists: Array<ListNode | null>, l: number, r: number): ListNode | null {
    if (l === r) {
        return lists[l]
    }

    if (l > r) return null

    const middle = l + Math.floor((r - l) / 2)
    const left = merge(lists, l, middle)
    const right = merge(lists, middle + 1, r)

    return mergeTwoLists(left, right)
}