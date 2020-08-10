import { Set } from './Set'
import LinkedList from '../linkedList'

export default class LinkedListSet<T> implements Set<T> {
    private list = new LinkedList<T>()

    add(item: T) {
        if (!this.contains(item)) {
            this.list.addFirst(item)
        }
    }

    remove(item: T) {
        return this.list.removeElement(item)
    }

    contains(item: T) {
        return this.list.contains(item)
    }

    getSize() {
        return this.list.getSize()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    toString() {
        return this.list.toString()
    }
}

function testLinkedListSet() {
    let set = new LinkedListSet<number>()

    for (let i = 0; i < 10; i++) {
        set.add(i)
        set.add(i)
    }
    console.log(set.remove(7))
    console.log(set.remove(10))
    console.log(set.toString())
    console.log('size', set.getSize())
}

testLinkedListSet()