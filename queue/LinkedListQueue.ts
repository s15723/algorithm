import Queue from './Queue'

class LinkedNode<T> {
    data: T
    next: LinkedNode<T>

    constructor(data: T = null, next: LinkedNode<T> = null) {
        this.data = data
        this.next = next
    }
}

export default class LinkedListQueue<T> implements Queue<T> {
    private head: LinkedNode<T> = null
    private tail: LinkedNode<T> = null
    private size = 0

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    enqueue(item: T) {
        if (this.tail === null) {
            this.head = this.tail = new LinkedNode(item)
        } else {
            this.tail.next = new LinkedNode(item)
            this.tail = this.tail.next
        }
        this.size++
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Cannot dequeue from an empty queue.')
        }
        let retNode = this.head
        this.head = this.head.next
        retNode.next = null
        if (this.head === null) {
            this.tail = null
        }
        this.size--

        return retNode.data
    }

    getFront(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty.')
        }
        return this.head.data
    }

    toString() {
        let res = 'Queue: front '

        let cur = this.head
        while (cur !== null) {
            res += `${cur.data}->`
            cur = cur.next
        }
        res += 'null tail'
        return res
    }
}

function test(queue: LinkedListQueue<number>) {
    for (let i = 0; i < 10; i++) {
        queue.enqueue(i)
        if (i % 3 === 2) {
            queue.dequeue()
        }
    }
    console.log(1)
    console.log('linkedListQueue', queue.toString())
    return queue
}

test(new LinkedListQueue<number>())
