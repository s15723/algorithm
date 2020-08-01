/**
 * 使用递归
 */
import ListNode from './ListNode'

export default function removeElement(head: ListNode, val: number) {
    if (head === null) {
        return null
    }

    // let res = removeElement(head.next, val)
    // if (head.data === val) {
    //     return res
    // } else {
    //     head.next = res
    //     return head
    // }

    head.next = removeElement(head.next, val)
    return head.data === val ? head.next : head
}

function test() {
    let nums = [1, 2, 7, 3, 4, 5, 7]
    let head = new ListNode(nums)
    console.log(head.toString())

    let res = removeElement(head, 7)
    console.log(res.toString())
}

test()
