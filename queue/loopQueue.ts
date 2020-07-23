/**
 * js里的数组本身就是动态的，所以在js里用数组实现循环队列其实是不太合理的
 * 需要我们假设数组是有容量限制的，然后循环，到适当的时候扩容缩容
 */
export interface Queue<T> {
  // O(1)
  enqueue(item: T): void

  // O(1)
  dequeue(): T

  // O(1)
  getFront(): T

  // O(1)
  getSize(): number

  // O(1)
  isEmpty(): boolean
}

export default class LoopQueue<T> implements Queue<T> {
  private data: T[]
  private front: number = 0
  private tail: number = 0
  private size: number = 0

  // 我们会有意识的浪费一个单位
  constructor(capacity: number = 10) {
    this.data = Array(capacity + 1)
  }

  getCapacity(): number {
    return this.data.length - 1
  }

  getSize(): number {
    return this.size
  }

  isEmpty(): boolean {
    return this.front === this.tail
  }

  enqueue(item: T): void {
    if (this.size === this.getCapacity()) {
      this.resize(this.getCapacity() * 2)
    }
    // if ((this.tail + 1) % this.data.length === this.front) {
    //   this.resize(this.getCapacity() * 2)
    // }

    this.data[this.tail] = item
    this.tail = (this.tail + 1) % this.data.length
    this.size++
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue')
    }

    let ret = this.data[this.front]

    this.data[this.front] = null
    this.front = (this.front + 1) % this.data.length
    this.size--

    if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
      this.resize(this.getCapacity() / 2)
    }

    return ret
  }

  private resize(newCapacity: number): void {
    let newData = Array(newCapacity + 1)

    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length]
    }

    this.data = newData
    this.front = 0
    this.tail = this.size
  }

  getFront(): T {
    if (this.isEmpty()) {
      throw new Error('The queue is empty')
    }

    return this.data[this.front]
  }

  print() {
    let str = 'front ['

    for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
      str += this.data[i]
      if ((i + 1) % this.data.length !== this.tail) {
        str += ','
      }
    }

    str += '] tail'

    return str
  }
}

const loop1 = new LoopQueue(3)
for (let i = 0; i < 10; i++) {
  loop1.enqueue(i)
  if (i % 3 === 2) {
    loop1.dequeue()
  }
}
loop1
console.log(loop1.print())