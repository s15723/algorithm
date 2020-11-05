import { ListNode, createLinkedList, printLinkedlist } from '../helper'

let test = createLinkedList([1, 2, 3, 4, 5])
console.log(printLinkedlist(test))

// 时间 O(n)
// 空间 O(1)
function oddEvenList(head: ListNode | null): ListNode | null {
    let dummyHead1 = new ListNode(-1)
    let dummyHead2 = new ListNode(-1)
    let prev1 = dummyHead1
    let prev2 = dummyHead2

    let cur = head
    let index = 1
    while(cur !== null) {
        if (index % 2 === 1) {
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
        index = index + 1
    }

    prev1.next = dummyHead2.next
    
    return dummyHead1.next
}

console.log(printLinkedlist(oddEvenList(test)))