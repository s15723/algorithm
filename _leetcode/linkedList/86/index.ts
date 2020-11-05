import { ListNode, createLinkedList, printLinkedlist } from '../helper'

let test = createLinkedList([1, 4, 3, 2, 5, 2])
console.log(printLinkedlist(test))

// 时间 O(n)
// 空间 O(1)
function partition(head: ListNode | null, x: number): ListNode | null {
    let dummyHead1 = new ListNode(-1)
    let dummyHead2 = new ListNode(-1)
    let prev1 = dummyHead1
    let prev2 = dummyHead2

    let cur = head
    while(cur !== null) {
        if (cur.val < x) {
            prev1.next = cur
            cur = cur.next
            prev1 = prev1.next
            prev1.next = null
        } else {
            prev2.next = cur
            cur = cur.next
            prev2 = prev2.next
            prev2.next = null
        }
    }

    prev1.next = dummyHead2.next
    let ret = dummyHead1.next

    return ret
}

console.log(printLinkedlist(partition(test, 3)))