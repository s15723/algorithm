import { ListNode, createLinkedList, printLinkedlist } from '../helper'

let test1 = createLinkedList([7, 2, 4, 3])
let test2 = createLinkedList([5, 6, 4])

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1: Array<ListNode> = []
    const stack2: Array<ListNode> = []
    const stack: Array<ListNode> = []

    let node = l1
    while(node) {
        stack1.push(node)
        node = node.next
    }
    node = l2
    while (node) {
        stack2.push(node)
        node = node.next
    }

    let carry = 0
    while(stack1.length || stack2.length || carry) {
        let sum = 0
        if (stack1.length) {
            sum += stack1[stack1.length - 1].val
            stack1.pop()
        }
        if (stack2.length) {
            sum += stack2[stack2.length - 1].val
            stack2.pop()
        }
        sum += carry

        stack.push(new ListNode(sum % 10))
        carry = Math.floor(sum / 10)
    }

    let ret = stack[stack.length - 1]
    let cur = ret
    stack.pop()
    while(stack.length) {
        cur.next = stack[stack.length - 1]
        cur = cur.next
        stack.pop()
    }

    return ret
}

console.log(printLinkedlist(addTwoNumbers(test1, test2)))