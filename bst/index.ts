/**
 * 前、中、后序遍历都是深度优先遍历，先顾及左子树
 *
 * 层序遍历，广度优先遍历
 * 
 * 待补充
 * floor、ceil
 * rank、select，维护 BstNode 的 size，以这个节点为根的二分搜索树有多少个元素
 * 维护 BstNode 的 depth
 * 支持重复元素，维护 BstNode 的 count
 */
import BstNode from './BstNode'
import LinkedListStack from '../stack/linkedListStack'
import LinkedListQueue from '../queue/linkedListQueue'

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

    // 前序遍历(递归)
    preOrder() {
        this._preOrder(this.root)
    }

    // 前序遍历以 node 为根的二分搜索树
    private _preOrder(node: BstNode<T>) {
        if (node === null) {
            return
        }

        console.log(node.val)
        this._preOrder(node.left)
        this._preOrder(node.right)
    }

    // 前序遍历(非递归)，用栈来记录接下来要遍历的节点
    preOrderNR() {
        let stack = new LinkedListStack<BstNode<T>>()

        stack.push(this.root)
        while (!stack.isEmpty()) {
            const cur = stack.pop()
            console.log(cur.val)

            // 先推右，再推左，因为要先遍历左，栈是后进先出的
            if (cur.right !== null) {
                stack.push(cur.right)
            }
            if (cur.left !== null) {
                stack.push(cur.left)
            }
        }
    }

    preOrderNRWithArray() {
        const stack = Array<BstNode<T>>()
        stack.push(this.root)
        while (stack.length) {
            const cur = stack.pop()
            console.log(cur.val)
            if (cur.right !== null) {
                stack.push(cur.right)
            }
            if (cur.left !== null) {
                stack.push(cur.left)
            }
        }
    }

    // 中序遍历
    inOrder() {
        this._inOrder(this.root)
    }

    private _inOrder(node: BstNode<T>) {
        if (node === null) {
            return
        }
        // 遍历到叶子节点，return
        this._inOrder(node.left)
        console.log(node.val)
        this._inOrder(node.right)
    }

    // 后序遍历
    postOrder() {
        this._postOrder(this.root)
    }

    private _postOrder(node: BstNode<T>) {
        if (node === null) {
            return
        }
        this._postOrder(node.left)
        this._postOrder(node.right)
        console.log(node.val)
    }

    // 二分搜索树的层序遍历
    levelOrder() {
        let queue = new LinkedListQueue<BstNode<T>>()
        queue.enqueue(this.root)

        while (!queue.isEmpty()) {
            const cur = queue.dequeue()
            console.log(cur.val)
            if (cur.left !== null) {
                queue.enqueue(cur.left)
            }
            if (cur.right !== null) {
                queue.enqueue(cur.right)
            }
        }
    }

    // 用数组模拟队列实现层序遍历
    levelOrderWithArray() {
        const queue = Array<BstNode<T>>()
        queue.push(this.root)

        while (queue.length) {
            const cur = queue.shift()
            console.log(cur.val)

            if (cur.left !== null) {
                queue.push(cur.left)
            }
            if (cur.right !== null) {
                queue.push(cur.right)
            }
        }
    }

    minimum(): T {
        if (this.size === 0) {
            throw new Error('BST is empty!')
        }
        // 非递归
        let cur = this.root
        while (cur.left !== null) {
            cur = cur.left
        }
        return cur.val

        // 递归
        return this._minimum(this.root).val
    }

    // 寻找二分搜索树的最小元素
    // 在这里递归写法比较麻烦
    private _minimum(node: BstNode<T>): BstNode<T> {
        if (node.left === null) {
            return node
        }
        return this._minimum(node.left)
    }

    maximum(): T {
        if (this.size === 0) {
            throw new Error('BST is empty!')
        }
        return this._maximum(this.root).val
    }

    private _maximum(node: BstNode<T>): BstNode<T> {
        if (node.right === null) {
            return node
        }
        return this._maximum(node.right)
    }

    removeMin(): T {
        let ret = this.minimum()
        this.root = this._removeMin(this.root)
        return ret
    }

    // 删除以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    private _removeMin(node: BstNode<T>): BstNode<T> {
        if (node.left === null) {
            let rightNode = node.right
            node.right = null
            this.size--
            return rightNode
        }

        node.left = this._removeMin(node.left)
        return node
    }

    removeMax(): T {
        let ret = this.maximum()
        this.root = this._removeMax(this.root)
        return ret
    }

    private _removeMax(node: BstNode<T>): BstNode<T> {
        if (node.right === null) {
            let leftNode = node.left
            node.left = null
            this.size--
            return leftNode
        }

        node.right = this._removeMax(node.right)
        return node
    }

    remove(item: T): void {
        this._remove(this.root, item)
    }

    // 删除以 node 为根的二分搜索树中值为 item 的节点
    // 返回删除节点后新的二分搜索树的根
    private _remove(node: BstNode<T>, item: T): BstNode<T> {
        if (node === null) {
            return null
        }

        if (item < node.val) {
            node.left = this._remove(node.left, item)
            return node
        } else if (item > node.val) {
            node.right = this._remove(node.right, item)
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

            // 待删除节点左右子树均不为空时
            // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
            // 用这个节点替代待删除节点的位置
            // 前驱 predecessor，后继 successor
            let successor = this._minimum(node.right)
            successor.right = this._removeMin(node.right)
            successor.left = node.left

            node.left = node.right = null

            return successor
        }
    }

    toString() {
        let res = ''
        res = this.generateBSTString(this.root, 0, res)
        return res
    }

    private generateBSTString(
        node: BstNode<T>,
        depth: number,
        res: string
    ): string {
        if (node === null) {
            res += `${this.generateDepthString(depth)}null\n`
            return res
        }

        res += `${this.generateDepthString(depth)}${node.val}\n`
        res = this.generateBSTString(node.left, depth + 1, res)
        res = this.generateBSTString(node.right, depth + 1, res)

        return res
    }

    private generateDepthString(depth: number) {
        let res = ''
        for (let i = 0; i < depth; i++) {
            res += '--'
        }
        return res
    }
}

let bst1 = new BST<number>()
const nums1 = [5, 3, 6, 8, 4, 2]
for (let i = 0; i < nums1.length; i++) {
    bst1.add(nums1[i])
}
// console.log('bst1.minimum', bst1.minimum())

// console.log(bst1)
// console.log(bst1.contains(5))
// console.log(bst1.contains(11))
// bst1.preOrder()
// console.log('toString\n', bst1.toString())
// bst1.inOrder()
// bst1.postOrder()

let bst2 = new BST<number>()
const nums2 = [28, 16, 13, 22, 30, 29, 42]
for (let i = 0; i < nums2.length; i++) {
    bst2.add(nums2[i])
}
// console.log('toString\n', bst2.toString())
// bst2.preOrder()
// bst2.inOrder()
// bst2.postOrder()
// bst2.preOrderNR()
// bst2.preOrderNRWithArray()
// bst2.levelOrder()
// bst2.levelOrderWithArray()
// console.log('bst2.minimum', bst2.minimum())

function testRemoveMin() {
    let bst3 = new BST<number>()
    for (let i = 0; i < 1000; i++) {
        bst3.add(Math.random() * 1000)
    }
    let arr = []
    while (!bst3.isEmpty()) {
        arr.push(bst3.removeMin())
    }
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            throw new Error('test failed')
        }
    }
    console.log('removeMin test success')
}
// testRemoveMin()

function testRemoveMax() {
    let bst4 = new BST<number>()
    for (let i = 0; i < 1000; i++) {
        bst4.add(Math.random() * 1000)
    }
    let arr = []
    while (!bst4.isEmpty()) {
        arr.push(bst4.removeMax())
    }
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            throw new Error('test failed')
        }
    }
    console.log('removeMax  test success')
}
// testRemoveMax()
