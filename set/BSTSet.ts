import { Set } from './Set'
import PerfectBST from '../bst/bst'

export default class BSTSet<T> implements Set<T> {
    private bst = new PerfectBST<T>()

    add(item: T) {
        return this.bst.add(item)
    }

    remove(item: T) {
        return this.bst.remove(item)
    }

    contains(item: T) {
        return this.bst.contains(item)
    }

    getSize() {
        return this.bst.getSize()
    }

    isEmpty() {
        return this.bst.isEmpty()
    }
}

function testBSTSet() {
    let set = new BSTSet<number>()

    for (let i = 0; i < 10; i++) {
        set.add(i)
        set.add(i)
    }

    console.log(set.getSize())
}

testBSTSet()
