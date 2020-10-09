import { Set } from './Set'
import LinkedList from '../linkedList'

/**
 * 无序集合(基于链表实现的无序集合效率太低)
 * 但是，基于哈希表实现的无序集合效率很高，增删查时间复杂度都比基于搜索树实现的有序集合要低
 * 
 * 链表实现的集合整体是 O(n^2) 时间复杂度的
 * 添加一次是 O(n)，添加 n 次就是 O(n^2) 咯
 * 也可以 0 + 1 + 2 + ... + k + ... + n-1 = n(n-1)/2 ==> O(n^2)
 */
export default class LinkedListSet<T> implements Set<T> {
    private list = new LinkedList<T>()

    // O(n)
    add(item: T) {
        if (!this.contains(item)) {
            this.list.addFirst(item)
        }
    }

    // O(n)
    remove(item: T) {
        return this.list.removeElement(item)
    }

    // O(n)
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