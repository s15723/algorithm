import Queue from '../queue/Queue'
import MaxHeap from './MaxHeap'

export default class PriorityQueue<T> implements Queue<T> {
    private maxHeap: MaxHeap<T> = new MaxHeap()

    enqueue(item: T) {
        return this.maxHeap.add(item)
    }

    dequeue() {
        return this.maxHeap.extractMax()
    }

    getFront() {
        return this.maxHeap.findMax()
    }

    getSize() {
        return this.maxHeap.size()
    }

    isEmpty() {
        return this.maxHeap.isEmpty()
    }
}