import ArrayQueue from './arrayQueue'
import LoopQueue, { Queue } from './loopQueue'

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

    const arrayQueue = new ArrayQueue<number>()
    const time1 = testQueue(arrayQueue, opCount)

    const loopQueue = new LoopQueue<number>()
    const time2 = testQueue(loopQueue, opCount)

    console.log(time1, time2)
    console.log('isLoopQueue faster:', time1 > time2)
}

test()