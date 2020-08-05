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

    // 前序遍历
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
const nums = [5, 3, 6, 8, 4, 2]
for (let i = 0; i < nums.length; i++) {
    bst1.add(nums[i])
}

// console.log(bst1)
// console.log(bst1.contains(5))
// console.log(bst1.contains(11))
// bst1.preOrder()
console.log('toString\n', bst1.toString())
// bst1.inOrder()
// bst1.postOrder()
