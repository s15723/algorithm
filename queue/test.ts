import ArrayQueue from './arrayQueue'
import LoopQueue from './loopQueue'
import LinkedListQueue from './linkedListQueue'
import Queue from './Queue'

function testQueue(queue: Queue<number>, opCount: number) {
    let startTime = Date.now()

    for (let i = 0; i < opCount; i++) {
        queue.enqueue(Math.random())
    }

    for (let i = 0; i < opCount; i++) {
        queue.dequeue()
    }

    let endTime = Date.now()

    return endTime - startTime
}

function test() {
    let opCount = 10000

    let arrayQueue = new ArrayQueue<number>()
    let time1 = testQueue(arrayQueue, opCount)

    // loopQueue resize操作会浪费一点时间
    let loopQueue = new LoopQueue<number>()
    let time2 = testQueue(loopQueue, opCount)

    // linkedListQueue new LinkedNode 会消耗时间
    let linkedListQueue = new LinkedListQueue<number>()
    let time3 = testQueue(linkedListQueue, opCount)

    console.log('Array Queue: ', time1)
    console.log('Loop Queue: ', time2)
    console.log('LinkedList Queue: ', time3)
}

test()
