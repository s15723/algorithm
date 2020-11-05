export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function createLinkedList(arr: number[]) {
    const n = arr.length
    if (n === 0) return null

    const head = new ListNode(arr[0])
    let curNode = head
    for (let i = 1; i < n; i++) {
        curNode.next = new ListNode(arr[i])
        curNode = curNode.next
    }
    return head
}

export function printLinkedlist(head: ListNode) {
    let curNode = head
    let res = ''
    while(curNode !== null) {
        res += `${curNode.val}->`
        curNode = curNode.next
    }
    res += 'null'
    return res
}