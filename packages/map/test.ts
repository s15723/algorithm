import { Map } from './Map'
import LinkedListMap from './LinkedListMap'
import BSTMap from './BSTMap'

function testMap(map: Map<number, number>) {
    let startTime = Date.now()

    const arr = []
    for (let i = 0; i < 500; i++) {
        arr.push(i)
    }
    for (let i = 500; i < 1000; i++) {
        arr.push(i)
        arr.push(i)
    }
    for (let i = 1000; i < 10000; i++) {
        arr.push(i)
        arr.push(i)
        arr.push(i)
    }

    arr.forEach(key => {
        if (map.contains(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.add(key, 1)
        }
    })

    let endTime = Date.now()

    return endTime - startTime
}

const linkedListMap = new LinkedListMap<number, number>()
const time1 = testMap(linkedListMap)
console.log('time1', time1)

const bstMap = new BSTMap<number, number>()
const time2 = testMap(bstMap)
console.log('time2', time2)
