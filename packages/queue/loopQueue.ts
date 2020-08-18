import Queue from './Queue'

export default class LoopQueue<T> implements Queue<T> {
    private data: T[]
    private front = 0
    private tail = 0
    private size = 0

    constructor(capacity: number = 10) {
        this.data = Array(capacity + 1)
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
        // return this.front === this.tail
    }

    getCapacity() {
        return this.data.length - 1
    }

    enqueue(item: T) {
        if ((this.tail + 1) % this.data.length === this.front) {
            console.log('enqueue', this.getCapacity() * 2)
            this.resize(this.getCapacity() * 2)
        }

        this.data[this.tail] = item
        this.tail = (this.tail + 1) % this.data.length
        this.size++
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error('Cannot dequeue from an empty queue.')
        }
        let ret: T = this.data[this.front]
        this.data[this.front] = null
        this.front = (this.front + 1) % this.data.length
        this.size--
        if (
            this.size === Math.floor(this.getCapacity() / 4) &&
            this.getCapacity() / 2 !== 0
        ) {
            console.log('dequeue', Math.floor(this.getCapacity() / 4))
            this.resize(Math.floor(this.getCapacity() / 2))
        }

        return ret
    }

    getFront(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty.')
        }
        return this.data[this.front]
    }

    resize(newCapacity: number) {
        let newData: T[] = Array(newCapacity + 1)
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[(i + this.front) % this.data.length]
        }

        this.data = newData
        this.front = 0
        this.tail = this.size
    }

    toString() {
        let str = `Queue: size = ${
            this.size
        }, capacity = ${this.getCapacity()} `
        str += 'front ['
        for (
            let i = this.front;
            i !== this.tail;
            i = (i + 1) % this.data.length
        ) {
            str += this.data[i]
            if ((i + 1) % this.data.length !== this.tail) {
                str += ','
            }
        }
        str += '] tail'
        return str
    }
}

function test(queue: LoopQueue<number>) {
    for (let i = 0; i < 10; i++) {
        queue.enqueue(i)
        if (i % 3 === 2) {
            queue.dequeue()
        }
    }
    console.log(queue.toString())
    return queue
}
console.log(test(new LoopQueue<number>(5)))
