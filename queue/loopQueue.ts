export interface Queue<T> {
  enqueue(item: T): void

  dequeue(): T

  // O(1)
  getFront(): T

  // O(1)
  getSize(): number

  // O(1)
  isEmpty(): boolean
}

class LoopQueue<T> implements Queue<T> {
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
}