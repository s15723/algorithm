import BSTSet from './BSTSet'
import LinkedListSet from './LinkedListSet'
import { Set } from './Set'

function testSet(set: Set<number>) {
    let startTime = Date.now()

    for (let i = 0; i < 100000; i++) {
        set.add(Math.random())
    }

    let endTime = Date.now()

    return endTime - startTime
}

let bstSet = new BSTSet<number>()
let time1 = testSet(bstSet)
console.log('bstSet', time1)

let linkedListSet = new LinkedListSet<number>()
let time2 = testSet(linkedListSet)
console.log('LinkedListSet', time2)

