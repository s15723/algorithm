import { Map } from './Map'

class LinkedNode<K, V> {
    key: K
    val: V
    next: LinkedNode<K, V>

    constructor(key: K = null, val: V = null, next: LinkedNode<K, V> = null) {
        this.key = key
        this.val = val
        this.next = next
    }

    toString() {
        return `${this.key.toString()}:${this.val.toString()}`
    }
}

export default class LinkedListMap<K, V> implements Map<K, V> {
    private dummyHead: LinkedNode<K, V> = new LinkedNode()
    private size = 0

    private getNode(key: K) {
        let cur = this.dummyHead.next
        while (cur !== null) {
            if (cur.key === key) {
                return cur
            }
            cur = cur.next
        }
        return null
    }

    add(key: K, val: V): void {
        const node = this.getNode(key)
        if (node === null) {
            this.dummyHead.next = new LinkedNode(key, val, this.dummyHead.next)
            this.size++
        } else {
            node.val = val
        }
    }

    remove(key: K): V {
        let prev = this.dummyHead

        while (prev.next !== null) {
            if (prev.next.key === key) {
                break
            }
            prev = prev.next
        }

        if (prev.next !== null) {
            let delNode = prev.next
            prev.next = delNode.next
            delNode.next = null
            this.size--
            return delNode.val
        }

        return null
    }

    contains(key: K) {
        return this.getNode(key) !== null
    }

    get(key: K): V {
        const node = this.getNode(key)
        return node === null ? null : node.val
    }

    set(key: K, newVal: V): void {
        const node = this.getNode(key)
        if (node === null) {
            throw new Error(`${key} is not exist`)
        }
        node.val = newVal
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }
}

function testLinkedListMap() {
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr.push(i)
    }
    for (let i = 5; i < 10; i++) {
        arr.push(i)
        arr.push(i)
    }
    for (let i = 10; i < 15; i++) {
        arr.push(i)
        arr.push(i)
        arr.push(i)
    }

    let map = new LinkedListMap<number, number>()
    arr.forEach(key => {
        if (map.contains(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.add(key, 1)
        }
    })
    console.log(map.getSize())
    console.log(map.get(8))
    return map
}

testLinkedListMap()
