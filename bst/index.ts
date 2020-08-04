import BstNode from './BstNode'

export default class BST<T> {
    private root: BstNode<T> = null
    private size = 0

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    // 向二分搜索树中添加新的元素 item
    add(item: T) {
        this.root = this._add(this.root, item)
    }

    // 向以 node 为根的二分搜索树中插入元素 item
    // 返回插入新节点后二分搜索树的根，给上一层
    // 空本身也是一颗二叉树
    private _add(node: BstNode<T>, item: T) {
        if (node === null) {
            this.size++
            return new BstNode(item)
        }

        if (item < node.val) {
            node.left = this._add(node.left, item)
        } else {
            node.right = this._add(node.right, item)
        }

        return node
    }

    contains(item: T): boolean {
        return this._contains(this.root, item)
    }

    // 看以 node 为根的二分搜索树中是否包含元素 item
    private _contains(node: BstNode<T>, item: T): boolean {
        if (node === null) {
            return false
        }

        if (item === node.val) {
            return true
        } else if (item < node.val) {
            return this._contains(node.left, item)
        } else {
            return this._contains(node.right, item)
        }
    }
}

let bst1 = new BST<number>()
for (let i = 0; i < 10; i++) {
    bst1.add(i)
}
console.log(bst1)
console.log(bst1.contains(5))
console.log(bst1.contains(11))
