/**
 * 链表的增删改查都是O(n)
 */
class LinkedNode<T> {
    public val: T
    public next: LinkedNode<T>

    constructor(val: T = null, next: LinkedNode<T> = null) {
        this.val = val
        this.next = next
    }
}

export default class LinkedList<T> {
    // 虚拟头节点
    // 用于统一对链表两侧进行的操作和对链表中间元素进行的操作
    // 如果只是对链表两侧进行操作，就没必要用虚拟头节点了 
    private dummyHead: LinkedNode<T>
    private size: number

    constructor() {
        this.dummyHead = new LinkedNode()
        this.size = 0
    }

    // O(n/2) ==> O(n)
    add(index: number, item: T): void {
        if (index < 0 || index > this.size) {
            throw new Error('Add failed.Illegal index')
        }

        let prev: LinkedNode<T> = this.dummyHead
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }

        // let node: LinkedNode<T> = new LinkedNode(item)
        // node.next = prev.next
        // prev.next = node
        // 上面这段代码等价于下面这段代码
        prev.next = new LinkedNode(item, prev.next)

        this.size++
    }

    // O(1)
    addFirst(item: T): void {
        this.add(0, item)
    }

    // O(n)
    addLast(item: T): void {
        this.add(this.size, item)
    }

    // O(n/2) ==> O(n)
    get(index: number): T {
        if (index < 0 || index > this.size) {
            throw new Error('Get failed.Illegal index')
        }

        let cur = this.dummyHead.next
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }

        return cur.val
    }

    // O(1)
    getFirst(): T {
        return this.get(0)
    }

    // O(n)
    getLast(): T {
        return this.get(this.size - 1)
    }

    // O(n/2) ==> O(n)
    set(index: number, item: T): void {
        if (index < 0 || index > this.size) {
            throw new Error('Set failed.Illegal index')
        }

        let cur = this.dummyHead.next
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        cur.val = item
    }

    // O(n/2) ==> O(n)
    contains(item: T): boolean {
        let cur = this.dummyHead.next
        while (cur !== null) {
            if (cur.val === item) {
                return true
            }
            cur = cur.next
        }
        return false
    }

    // O(n/2) ==> O(n)
    remove(index: number): T {
        if (index < 0 || index > this.size) {
            throw new Error('Remove failed.Illegal index')
        }

        let prev = this.dummyHead
        for (let i = 0; i < index; i++) [
            prev = prev.next
        ]
        let deleteNode = prev.next
        prev.next = deleteNode.next
        deleteNode.next = null
        this.size--

        return deleteNode.val
    }

    // O(1)
    removeFirst() {
        return this.remove(0)
    }

    // O(n)
    removeLast() {
        return this.remove(this.size - 1)
    }

    // O(n)
    toString() {
        let str = ''
        let cur = this.dummyHead.next
        while (cur !== null) {
            str += `${cur.val} -> `
            cur = cur.next
        }
        // 等价于上面的写法  
        // for (cur; cur !== null; cur = cur.next) {
        //     str += `${cur} -> `
        // }
        str += 'null'

        return str
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }
}
let linkedList: LinkedList<number> = new LinkedList()
for (let i = 0; i < 5; i++) {
    linkedList.addFirst(i)
    console.log(linkedList.toString())
}