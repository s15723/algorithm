/**
 * 前、中、后序遍历都是深度优先遍历
 */
import BstNode from './BstNode'
import LinkedListStack from '../stack/linkedListStack'

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
bst2.preOrder()
// bst2.inOrder()
// bst2.postOrder()
bst2.preOrderNR()