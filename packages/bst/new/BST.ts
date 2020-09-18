class BstNode<Key, Value> {
    public key: Key
    public value: Value
    public left: BstNode<Key, Value> = null
    public right: BstNode<Key, Value> = null
    public size: number = 1

    constructor(key: Key, value: Value) {
        this.key = key
        this.value = value
    }
}

class BST<Key, Value> {
    private root: BstNode<Key, Value> = null

    size() {
        return this.root.size
    }

    isEmpty() {
        return this.root === null
    }

    // 向二分搜索树中插入一个新的(key, value)数据对
    insert(key: Key, value: Value) {
        this.root = this._insert(this.root, key, value)
    }

    // 向以 node 为根的二分搜索树中，插入节点
    // 返回插入新节点后的二分搜索树的根
    private _insert(node: BstNode<Key, Value>, key: Key, value: Value): BstNode<Key, Value> {
        if (node === null) {
            return new BstNode(key, value)
        }

        if (key < node.key) {
            node.left = this._insert(node.left, key, value)
        } else if (key > node.key) {
            node.right = this._insert(node.right, key, value)
        } else {
            node.value = value
        }

        return node
    }


    // 查看二分搜索树中是否存在键key
    contain(key: Key) {
        return this._contain(this.root, key)
    }

    // 查看以node为根的二分搜索树中是否包含键值为key的节点
    private _contain(node: BstNode<Key, Value>, key: Key): boolean {
        if (node === null) {
            return false
        }

        if (key === node.key) {
            return true
        } else if (key < node.key) {
            return this._contain(node.left, key)
        } else {
            return this._contain(node.right, key)
        }
    }

    // 在二分搜索树中搜索键key所对应的值。如果这个值不存在, 则返回null
    search(key: Key) {
        return this._search(this.root, key)
    }

    // 在以node为根的二分搜索树中查找key所对应的value, 递归算法
    // 若value不存在, 则返回NULL
    private _search(node: BstNode<Key, Value>, key: Key) {
        if (node === null) {
            return null
        }

        if (key === node.key) {
            return node.value
        } else if (key < node.key) {
            return this._search(node.left, key)
        } else {
            return this._search(node.right, key)

        }
    }

    // 寻找二分搜索树的最小的键值
    minimum(): Key {
        let minNode = this._minimum(this.root)
        return minNode.key
    }

    // 返回以node为根的二分搜索树的最小键值所在的节点
    private _minimum(node: BstNode<Key, Value>): BstNode<Key, Value> {
        if (node.left === null) {
            return node
        }
        return this._minimum(node.left)
    }

    // 寻找二分搜索树的最大的键值
    maximum(): Key {
        let maxNode = this._maximum(this.root)
        return maxNode.key
    }

    private _maximum(node: BstNode<Key, Value>): BstNode<Key, Value> {
        if (node.right === null) {
            return node
        }
        return this._maximum(node.right)
    }

    removeMin() {
        if (this.root !== null) {
            this.root = this._removeMin(this.root)
        }
    }

    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    private _removeMin(node: BstNode<Key, Value>): BstNode<Key, Value> {
        if (node.left === null) {
            let rightNode = node.right
            node.right = null
            return rightNode
        }

        node.left = this._removeMin(node.left)
        return node
    }

    removeMax() {
        if (this.root !== null) {
            this.root = this._removeMax(this.root)
        }
    }

    // 删除掉以node为根的二分搜索树中的最大节点
    // 返回删除节点后新的二分搜索树的根
    private _removeMax(node: BstNode<Key, Value>): BstNode<Key, Value> {
        if (node.right === null) {
            let leftNode = node.left
            node.left = null
            return leftNode
        }

        node.right = this._removeMin(node.right)
        return node
    }

    // 从二分搜索树中删除键值为key的节点
    remove(key: Key) {
        this.root = this._remove(this.root, key)
    }

    // 删除掉以node为根的二分搜索树中键值为key的节点, 递归算法
    // 返回删除节点后新的二分搜索树的根
    _remove(node: BstNode<Key, Value>, key: Key): BstNode<Key, Value> {
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
            // key === node.key
            if (node.left === null) {
                let rightNode = node.right
                node.right = null
                return rightNode
            }
            if (node.right === null) {
                let leftNode = node.left
                node.left = null
                return leftNode
            }

            // 待删除节点左右子树均不为空的情况
            // 找到比待删除节点大的最小节点, 即待删除节点右子树的最小节点
            // 用这个节点顶替待删除节点的位置
            // 后继
            let successor = this._minimum(node.right)
            successor.left = node.left
            successor.right = this._removeMin(node.right)

            node.left = node.right = null

            return successor
        }
    }

    // 寻找key的floor值, 递归算法
    // 如果不存在key的floor值(key比BST中的最小值还小), 返回NULL
    floor(key: Key): Key {
        if (this.root === null || key < this.minimum()) {
            return null
        }
        let floorNode = this._floor(this.root, key)
        return floorNode.key
    }

    // 在以node为根的二叉搜索树中, 寻找key的floor值所处的节点, 递归算法
    private _floor(node: BstNode<Key, Value>, key: Key): BstNode<Key, Value> {
        if (node === null) {
            return null
        }

        if (key === node.key) {
            return node
        }

        if (key < node.key) {
            return this._floor(node.left, key)
        }

        if (key > node.key) {
            // 如果node->key < key
            // 则node有可能是key的floor节点, 也有可能不是(存在比node->key大但是小于key的其余节点)
            // 需要尝试向node的右子树寻找一下
            const tempNode = this._floor(node.right, key)
            if (tempNode !== null) {
                return tempNode
            }
            return node
        }
    }

    ceil(key: Key): Key {
        if (this.root === null || key > this.maximum()) {
            return null
        }
        let ceilNode = this._ceil(this.root, key)
        return ceilNode.key
    }

    // 在以node为根的二叉搜索树中, 寻找key的ceil值所处的节点
    private _ceil(node: BstNode<Key, Value>, key: Key): BstNode<Key, Value> {
        if (node === null) {
            return null
        }

        if (key === node.key) {
            return node
        }

        if (key > node.key) {
            return this._ceil(node.right, key)
        }

        if (key < node.key) {
            // 如果node->key > key
            // 则node有可能是key的ceil节点, 也有可能不是(存在比node->key小但是大于key的其余节点)
            // 需要尝试向node的左子树寻找一下
            const tempNode = this._ceil(node.left, key)
            if (tempNode !== null) {
                return tempNode
            }
            return node
        }
    }
}