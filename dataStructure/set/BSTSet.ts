import { Set } from './Set'
import PerfectBST from '../bst/bst'

/**
 * 有序集合，能力更大。但也会付出相应代价，时间复杂度会比哈希表实现的无序集合更高
 * 
 * 单个操作 平均 O(logn)
 * 最差(顺序插入,1-2-3-4-5-6-....)会退化成链表， O(n)
 * 
 * 二分搜索树实现的集合整体是 O(nlogn)/O(nh) 的时间复杂度
 */
export default class BSTSet<T> implements Set<T> {
    private bst = new PerfectBST<T>()

    // O(logn)
    add(item: T) {
        return this.bst.add(item)
    }

    // O(logn)
    remove(item: T) {
        return this.bst.remove(item)
    }

    // O(logn)
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
