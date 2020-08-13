import { Map } from './Map'

class BSTNode<K, V> {
    key: K
    val: V
    left: BSTNode<K, V> = null
    right: BSTNode<K, V> = null

    constructor(key: K, val: V) {
        this.key = key
        this.val = val
    }
}

// O(h) ==> O(logn)
export default class BSTMap<K, V> implements Map<K, V> {
    private root: BSTNode<K, V> = null
    private size = 0

    add(key: K, val: V) {
        this.root = this._add(this.root, key, val)
    }

    // 在以 node 为根的二分搜索树中添加 key/val，并返回新的二分搜索树
    private _add(node: BSTNode<K, V>, key: K, val: V) {
        if (node === null) {
            this.size++
            return new BSTNode(key, val)
        }

        if (key < node.key) {
            node.left = this._add(node.left, key, val)
        } else if (key > node.key) {
            node.right = this._add(node.right, key, val)
        } else {
            // 如果 key 已存在，更新 val
            node.val = val
        }

        return node
    }

    private getNode(node: BSTNode<K, V>, key: K): BSTNode<K, V> {
        if (node === null) {
            return null
        }

        if (key < node.key) {
            return this.getNode(node.left, key)
        } else if (key > node.key) {
            return this.getNode(node.right, key)
        } else {
            return node
        }
    }

    contains(key: K) {
        return this.getNode(this.root, key) !== null
    }

    get(key: K): V {
        const node = this.getNode(this.root, key)
        return node === null ? null : node.val
    }

    set(key: K, newVal: V): void {
        const node = this.getNode(this.root, key)
        if (node === null) {
            throw new Error(`${key} is not exist`)
        }

        node.val = newVal
    }

    private minimum(node: BSTNode<K, V>): BSTNode<K, V> {
        if (node.left === null) {
            return node
        }
        return this.minimum(node.left)
    }

    private removeMin(node: BSTNode<K, V>): BSTNode<K, V> {
        if (node.left === null) {
            let rightNode = node.right
            node.right = null
            this.size--
            return rightNode
        }
        node.left = this.removeMin(node.left)
        return node
    }

    remove(key: K): V {
        const node = this.getNode(this.root, key)
        if (node !== null) {
            this.root = this._remove(this.root, key)
            return node.val
        }
        return null
    }

    // 删除以 node 为根的二分搜索树的元素，并返回新的二分搜索树
    private _remove(node: BSTNode<K, V>, key: K): BSTNode<K, V> {
        if (node === null) {
            return null
        }

        if (key < node.key) {
            node.left = this._remove(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = this._remove(node.right, key)
            return node
        } else {
            if (node.left === null) {
                let rightNode = node.right
                node.right = null
                this.size--
                return rightNode
            }
            if (node.right === null) {
                let leftNode = node.left
                node.left = null
                this.size--
                return leftNode
            }

            let successor = this.minimum(node.right)
            successor.left = node.left
            successor.right = this.removeMin(node.right)

            node.left = node.right = null

            return successor
        }
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }
}

function testBSTMap() {
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

    let map = new BSTMap<number, number>()
    arr.forEach(key => {
        if (map.contains(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.add(key, 1)
        }
    })
    console.log(map.getSize())
    console.log(map.get(10))
    map.remove(8)
    console.log(map.get(8))
    return map
}

testBSTMap()
