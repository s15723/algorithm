import { ListNode, createLinkedList, printLinkedlist } from '../helper'

let test1 = createLinkedList([2, 4, 3])
let test2 = createLinkedList([5, 6, 4])
// console.log(printLinkedlist(test))

// 时间 O(max(m,n))
// 空间 O(max(m,n))
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let p1 = l1, p2 = l2
    let dummyHead = new ListNode(-1)
    let cur = dummyHead
    let carried = 0
    while (p1 || p2) {
        let a = p1 ? p1.val : 0
        let b = p2 ? p2.val : 0
        cur.next = new ListNode((a + b + carried) % 10)
        carried = Math.floor((a + b + carried) / 10)
        cur = cur.next
        p1 = p1 ? p1.next : null
        p2 = p2 ? p2.next : null
    }

    cur.next = carried ? new ListNode(1) : null
    return dummyHead.next
}

console.log(printLinkedlist(addTwoNumbers(test1, test2)))