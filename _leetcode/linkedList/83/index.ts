import {ListNode, createLinkedList, printLinkedlist} from '../helper'

let test = createLinkedList([1,1,2])
console.log(printLinkedlist(test))

// 时间 O(n)
// 空间 O(1)
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let cur = head
    while(cur !== null && cur.next !== null) {
        if (cur.val === cur.next.val) {
            let deleteNode = cur.next
            cur.next = deleteNode.next
            deleteNode.next = null
        } else {
            cur = cur.next
        }
    }

    return head
}

console.log(printLinkedlist(deleteDuplicates(test)))