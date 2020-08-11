/**
 * 完整版二分搜索树
 *
 * 包含功能
 * 1.添加 2.查询 3.前中后序遍历 4.层序遍历 5.删除最大最小元素 6.删除任意元素
 * 7. rank(排第几) select(rank)找到排第rank的节点
 * 8. floor、ceil，参数并不一定要在 bst 中(待实现)
 * 
 * 注意！因为这个版本的二分搜索树需要维护 node.size
 * 每次添加/删除操作都会深比较(deepEqual)操作前后的 node 来判断是否添加/删除成功
 * 这个操作需要花费很长很长时间，貌似这种实现方式不妥
 * 
 * 已解决上述问题
 * 通过比较添加/删除前后子树的 size 有没有变化来判断是否添加/删除成功
 * 但解决方案导致代码多了很多
 * 待寻找更合适的方式，其实应该可以用双向链表来减少一个 if 判断，就先不做了
 */
import BstNode from './BstNode'

export default class PerfectBST<T> {
    private root: BstNode<T> = null

    // O(1)
    getSize() {
        return this.root.size
    }

    // O(1)
    isEmpty() {
        return this.root === null
    }

    add(item: T) {
        this.root = this._add(this.root, item)
    }

    // h = log2 (n+1)
    // O(h) ==> O(logn)
    private _add(node: BstNode<T>, item: T): BstNode<T> {
        if (node === null) {
            return new BstNode(item)
        }

        // 这块逻辑待用双向链表来优化
        if (item < node.val) {
            if (node.left === null) {
                node.size++
                node.left = this._add(node.left, item)
            } else {
                const prevSize = node.left.size
                node.left = this._add(node.left, item)
                const curSize = node.left.size
                if (prevSize < curSize) {
                    node.size++
                }
            }
        } else if (item > node.val) {
            if (node.right === null) {
                node.size++
                node.right = this._add(node.right, item)
            } else {
                const prevSize = node.right.size
                node.right = this._add(node.right, item)
                const curSize = node.right.size
                if (prevSize < curSize) {
                    node.size++
                }
            }
        }

        return node
    }

    contains(item: T): boolean {
        return this._contains(this.root, item)
    }

    // O(logn)
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

    preOrder() {
        this._preOrder(this.root)
    }

    // 第一次访问该节点时输出值
    private _preOrder(node: BstNode<T>) {
        if (node === null) {
            return
        }

        console.log(node.val)
        this._preOrder(node.left)
        this._preOrder(node.right)
    }

    preOrderNR() {
        let stack: BstNode<T>[] = []
        stack.push(this.root)

        while (stack.length) {
            const cur = stack.pop()
            console.log(cur.val)
            if (cur.right) {
                stack.push(cur.right)
            }
            if (cur.left) {
                stack.push(cur.left)
            }
        }
    }

    inOrder() {
        this._inOrder(this.root)
    }

    // 第二次访问该节点时输出值
    private _inOrder(node: BstNode<T>) {
        if (node === null) {
            return
        }

        this._inOrder(node.left)
        console.log(node.val)
        this._inOrder(node.right)
    }

    postOrder() {
        this._postOrder(this.root)
    }

    // 第三次访问该节点时输出值
    private _postOrder(node: BstNode<T>) {
        if (node === null) {
            return
        }
        this._postOrder(node.left)
        this._postOrder(node.right)
        console.log(node.val)
    }

    levelOrder() {
        let queue: BstNode<T>[] = []
        queue.push(this.root)

        while (queue.length) {
            const cur = queue.shift()
            console.log(cur.val)
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }
    }

    minimum(): T {
        if (this.getSize() === 0) {
            throw new Error('BST is empty')
        }
        // 非递归
        // let cur = this.root
        // while (cur.left) {
        //     cur = cur.left
        // }
        // return cur.val

        // 递归
        return this._minimum(this.root).val
    }

    private _minimum(node: BstNode<T>): BstNode<T> {
        if (node.left === null) {
            return node
        }
        return this._minimum(node.left)
    }

    maximum(): T {
        if (this.getSize() === 0) {
            throw new Error('BST is empty')
        }
        let cur = this.root
        while (cur.right) {
            cur = cur.right
        }
        return cur.val
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

    private _removeMin(node: BstNode<T>): BstNode<T> {
        if (node.left === null) {
            let rightNode = node.right
            node.right = null
            return rightNode
        }

        node.left = this._removeMin(node.left)
        node.size--
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
            return leftNode
        }

        node.right = this._removeMax(node.right)
        node.size--
        return node
    }

    remove(item: T): void {
        this.root = this._remove(this.root, item)
    }

    // O(logn)
    _remove(node: BstNode<T>, item: T): BstNode<T> {
        if (node === null) {
            return null
        }

        // 找到了要删除的节点
        // 不需要处理删除节点的 size
        if (item === node.val) {
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
            // 此处为前驱，后继在 index.ts
            let predecessor = this._maximum(node.left)
            predecessor.right = node.right
            predecessor.left = this._removeMax(node.left)

            node.left = node.right = null

            return predecessor
        }

        // 没找到要删除的节点，继续递归
        if (item < node.val) {
            // node.left === null 说明没找到啊，啥都不做
            if (node.left !== null) {
                if (item === node.left.val) {
                    node.left = this._remove(node.left, item)
                    node.size--
                } else {
                    const prev = node.left.size
                    node.left = this._remove(node.left, item)
                    const cur = node.left.size
                    if (prev > cur) {
                        node.size--
                    }
                }
            } else {
                console.log(`${item} is not exist in the bst`)
            }
        } else if (item > node.val) {
            if (node.right !== null) {
                if (item === node.right.val) {
                    node.right = this._remove(node.right, item)
                    node.size--
                } else {
                    const prev = node.right.size
                    node.right = this._remove(node.right, item)
                    const cur = node.right.size
                    if (prev > cur) {
                        node.size--
                    }
                }
            } else {
                console.log(`${item} is not exist in the bst`)
            }
        }

        return node
    }

    rank(item: T): number {
        return this._rank(this.root, item)
    }

    // 在以 node 为根的二分搜索树中，返回 item 的序号
    private _rank(node: BstNode<T>, item: T): number {
        if (node === null) {
            throw new Error(`${item} is not existed!`)
        }

        let leftSize = node.left ? node.left.size : 0
        if (item === node.val) {
            return leftSize + 1
        } else if (item < node.val) {
            return this._rank(node.left, item)
        } else {
            return this._rank(node.right, item) + leftSize + 1
        }
    }

    select(rank: number): T {
        if (rank <= 0 || rank >= this.root.size) {
            throw new Error(`invalid rank ${rank}`)
        }
        return this._select(this.root, rank - 1).val
    }

    // 找到以 node 为根的二分搜索树中第 rank 个元素
    private _select(node: BstNode<T>, rank: number): BstNode<T> {
        if (node === null) {
            return null
        }

        let leftSize = node.left ? node.left.size : 0
        if (rank < leftSize) {
            return this._select(node.left, rank)
        } else if (rank > leftSize) {
            return this._select(node.right, rank - leftSize - 1)
        } else {
            return node
        }
    }

    toString() {
        let res = this.generateBSTString(this.root, 0, '')
        return res
    }

    private generateBSTString(node: BstNode<T>, depth: number, res: string): string {
        if (node === null) {
            res += `${this.generateDepthString(depth)}null\n`
            return res
        }

        res += `${this.generateDepthString(depth)}val:${node.val}, size:${
            node.size
            }\n`
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

function testAdd() {
    let bst = new PerfectBST<number>()
    const nums1 = [5, 3, 6, 8, 4, 2, 2, 2, 3, 3, 6, 8, 4]

    for (let i = 0; i < nums1.length; i++) {
        bst.add(nums1[i])
    }
    return bst.toString()
}
// console.log(testAdd())

function testContains(item: number) {
    let bst = new PerfectBST<number>()
    const nums1 = [5, 3, 6, 8, 4, 2]

    for (let i = 0; i < nums1.length; i++) {
        bst.add(nums1[i])
    }
    return bst.contains(item)
}
// console.log(testContains(6))
// console.log(testContains(10))

function testOrder() {
    let bst = new PerfectBST<number>()
    const nums1 = [5, 3, 6, 8, 4, 2]

    for (let i = 0; i < nums1.length; i++) {
        bst.add(nums1[i])
    }
    // bst.preOrder()
    // bst.preOrderNR()
    // bst.inOrder()
    // bst.postOrder()
    // bst.levelOrder()
    return bst.getSize()
}
// console.log('size', testOrder())

function testRemove() {
    let bst = new PerfectBST<number>()
    const nums1 = [5, 3, 7, 6, 8, 4, 2, 9]

    for (let i = 0; i < nums1.length; i++) {
        bst.add(nums1[i])
    }
    // console.log(bst.maximum())
    // console.log(bst.minimum())
    bst.removeMin()
    bst.removeMax()
    bst.remove(6)
    bst.remove(6)
    bst.remove(10)
    return bst.toString()
}

console.log(testRemove())

function testRankSelect() {
    let bst = new PerfectBST<number>()
    const nums1 = [5, 3, 7, 8, 6, 4, 2, 9]

    for (let i = 0; i < nums1.length; i++) {
        bst.add(nums1[i])
    }
    // console.log(bst.rank(3))
    // console.log(bst.select(2))
    return bst.toString()
}

// testRankSelect()
