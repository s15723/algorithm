import ListNode from './ListNode'
/**
 * Leetcode 203. Remove Linked List Elements
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * 使用虚拟头节点
 */
export default function removeElement(head: ListNode, val: number) {
    let dummyHead = new ListNode(-1)
    dummyHead.next = head

    let prev = dummyHead
    while (prev.next !== null) {
        if (prev.next.data === val) {
            prev.next = prev.next.next
        } else {
            prev = prev.next
        }
    }

    return dummyHead.next
}

function test() {
    let nums = [1, 2, 6, 3, 4, 5, 6]
    let head = new ListNode(nums)
    console.log(head.toString())

    let res = removeElement(head, 6)
    console.log(res.toString())
}

test()
