import ArrayQueue from './arrayQueue'
import LoopQueue, { Queue } from './loopQueue'
import LinkedListQueue from './LinkedListQueue'

const testQueue = (queue: Queue<number>, opCount) => {
    const startTime = Date.now()

    for (let i = 0; i < opCount; i++) {
        queue.enqueue(Math.random())
    }

    for (let i = 0; i < opCount; i++) {
        queue.dequeue()
    }

    const endTime = Date.now()

    return endTime - startTime
}

const test = () => {
    const opCount = 100000

    // 首先 for 循环是 O(n) 的

    // 对于 arrayQueue，enqueue是O(1)的，结合for循环就是 O(n) 的
    // dequeue是  O(n) 的，结合for循环就是 O(n^2) 的
    const arrayQueue = new ArrayQueue<number>()
    const time1 = testQueue(arrayQueue, opCount)

    // loopQueue 结合 for 循环都是 O(n) 的
    const loopQueue = new LoopQueue<number>()
    const time2 = testQueue(loopQueue, opCount)

    const linkedListQueue = new LinkedListQueue<number>()
    const time3 = testQueue(linkedListQueue, opCount)

    console.log(time1, time2, time3)
    console.log('isLoopQueue faster:', time1 > time2)
}

test()