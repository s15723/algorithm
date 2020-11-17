/**
 * 优先队列
 * 维护一个最小堆，里面保存着每个链表的最小值
 * 
 * 时间 O(nlogk), n 是总节点个数, k 是列表个数
 * 空间 O(1)
 */
import {
    ListNode,
    createLinkedList,
    printLinkedlist,
} from '../../linkedList/helper'



const l1 = createLinkedList([-10,-9,-9,-3,-1,-1,0])
const l2 = createLinkedList([-5])
const l3 = createLinkedList([4])
const l4 = createLinkedList([-8])
const l5 = createLinkedList([])
const l6 = createLinkedList([-9,-6,-5,-4,-2,2,3])
const l7 = createLinkedList([-3,-3,-2,-1,0])

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    function parentK(k: number) {
        return Math.floor((k - 1) / 2)
    }

    function leftChild(k: number) {
        return 2 * k + 1
    }

    function heapify(arr: ListNode[]) {
        const n = arr.length
        for (let i = parentK(n - 1); i >= 0; i--) {
            siftDown(i, arr)
        }
    }

    function siftDown(k: number, arr: ListNode[]) {
        if (arr.length === 0) return
        const len = arr.length
        const e = arr[k]
        while (leftChild(k) < len) {
            let j = leftChild(k)

            if (j + 1 < len && arr[j + 1].val < arr[j].val) {
                j = j + 1
            }

            if (e.val <= arr[j].val) {
                break
            }

            arr[k] = arr[j]
            k = j
        }

        arr[k] = e
    }

    function swap(i: number, j: number, arr: ListNode[]) {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }

    if (lists.length === 0) {
        return null
    }

    const dummyHead = new ListNode(-1)
    const queue: ListNode[] = []
    let tail = dummyHead
    for (let node of lists) {
        if (node) {
            queue.push(node)
        }
    }
    heapify(queue)
    while(queue.length) {
        tail.next = queue[0]
        tail = tail.next
        if (tail.next) {
            queue[0] = tail.next
        } else {
            swap(0, queue.length - 1, queue)
            queue.pop()
        }
        siftDown(0, queue)
    }

    return dummyHead.next
}

console.log(printLinkedlist(mergeKLists([l1, l2, l3, l4, l5, l6, l7])))