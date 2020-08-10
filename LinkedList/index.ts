import deepEqual, { isObject } from '../array/deepEqual'

class LinkedNode<T> {
    data: T
    next: LinkedNode<T>

    constructor(data: T = null, next: LinkedNode<T> = null) {
        this.data = data
        this.next = next
    }
}

export default class LinkedList<T> {
    private dummyHead: LinkedNode<T>
    private size: number

    constructor() {
        this.dummyHead = new LinkedNode()
        this.size = 0
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    add(index: number, item: T) {
        if (index < 0 || index > this.size) {
            throw new Error('Add failed. Illegal index.')
        }

        let prev = this.dummyHead
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }
        prev.next = new LinkedNode(item, prev.next)
        this.size++
    }

    addFirst(item: T) {
        this.add(0, item)
    }

    addLast(item: T) {
        this.add(this.size, item)
    }

    get(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error('Get failed. Illegal index.')
        }

        let cur = this.dummyHead.next
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        return cur.data
    }

    getFirst() {
        return this.get(0)
    }

    getLast() {
        return this.get(this.size - 1)
    }

    set(index: number, item: T) {
        if (index < 0 || index >= this.size) {
            throw new Error('Set failed. Illegal index.')
        }
        let cur = this.dummyHead.next
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        cur.data = item
    }

    contains(item: T) {
        let cur = this.dummyHead.next
        while (cur !== null) {
            const allObject = isObject(item) && isObject(cur.data)
            if (
                (allObject && deepEqual(cur.data, item)) ||
                (!allObject && cur.data === item)
            ) {
                return true
            }
            cur = cur.next
        }
        return false
    }

    remove(index: number) {
        if (index < 0 || index >= this.size)
            throw new Error('Remove failed. Index is illegal.')

        let prev = this.dummyHead
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }

        let retNode = prev.next
        prev.next = retNode.next
        retNode.next = null
        this.size--

        return retNode.data
    }

    removeFirst() {
        return this.remove(0)
    }

    removeLast() {
        return this.remove(this.size - 1)
    }

    removeElement(item: T) {
        let prev = this.dummyHead

        while (prev.next !== null) {
            const allObject = isObject(prev.next.data) && isObject(item)
            if (
                (allObject && deepEqual(prev.next.data, item)) ||
                (!allObject && prev.next.data === item)
            ) {
                break
            }
            prev = prev.next
        }

        if (prev.next !== null) {
            let delNode = prev.next
            prev.next = delNode.next
            delNode.next = null
            this.size--
            return true
        } else {
            // 遍历到链表最后，也没找到匹配的元素
            return false
        }
    }

    toString() {
        let res = ''
        let cur = this.dummyHead.next
        while (cur !== null) {
            res += `${cur.data}->`
            cur = cur.next
        }
        res += 'null'

        return res
    }

    // 递归插入
    insert(item: T) {
        this.dummyHead.next = this._insert(this.dummyHead.next, item)
    }

    // 向 cur 后面插入 item
    private _insert(cur: LinkedNode<T>, item: T): LinkedNode<T> {
        if (cur === null) {
            this.size++
            return new LinkedNode(item)
        }

        cur.next = this._insert(cur.next, item)
        return cur
    }
}

let linkedList: LinkedList<number> = new LinkedList()
for (let i = 5; i >= 0; i--) {
    linkedList.addFirst(i)
    console.log(linkedList.toString())
}
console.log(linkedList.removeElement(0))
console.log(linkedList.removeElement(7))
console.log('finally', linkedList.toString())

let recursiveLinkedList: LinkedList<number> = new LinkedList()
for (let i = 0; i < 5; i++) {
    recursiveLinkedList.insert(i + Math.random())
    console.log(recursiveLinkedList.toString())
}
