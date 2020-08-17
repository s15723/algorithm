/** 
 * 二叉堆
 * 1.是完全二叉树
 * 2.堆中某个节点的值总是不大于其父节点的值(最大堆)，也有最小堆
 * 3.节点的大小和节点所处的层次没有必然联系
 * 
 * 以 index = 1 开头
 * parent(i) = i / 2 
 * left child(i) = 2 * i
 * right child(i) = 2 * i + 1
 * 
 * 以 index = 0 开头
 * parent(i) = Math.floor((i-1) / 2)
 * left child(i) = 2 * i + 1
 * right child(i) = 2 * i + 2
 * 
 * sift up 堆中元素的上浮过程
 * 
 * sift down 堆中元素的下沉过程
*/
class MaxHeap<T> {
    private data: Array<T> = []

    size() {
        return this.data.length
    }

    isEmpty() {
        return this.data.length === 0
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的父亲节点的索引
    private parent(index: number): number {
        if (index === 0) {
            throw new Error("index-0 doesn't have parent.")
        }
        return Math.floor((index - 1) / 2)
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
    private leftChild(index: number): number {
        return 2 * index + 1
    }

    // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
    private rightChild(index: number): number {
        return 2 * index + 2
    }

    private swap(i: number, j: number) {
        if (i < 0 || i >= this.data.length || j < 0 || j >= this.data.length) {
            throw new Error('Index is illegal.')
        }
        const tmp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = tmp
    }

    // 向堆中添加元素
    add(item: T): void {
        this.data.push(item)
        this.siftUp(this.data.length - 1)
    }

    private siftUp(k: number): void {
        while (k > 0 && this.data[k] > this.data[this.parent(k)]) {
            this.swap(k, this.parent(k))

            k = this.parent(k)
        }
    }

    // 看堆中的最大元素
    findMax(): T {
        if (this.data.length === 0) {
            throw new Error('Can not findMax when heap is empty.')
        }
        return this.data[0]
    }

    extractMax(): T {
        const ret = this.findMax()
        this.swap(0, this.data.length - 1)
        this.data.pop()
        this.siftDown(0)

        return ret
    }

    private siftDown(k: number): void {
        while (this.leftChild(k) < this.data.length) {
            let j = this.leftChild(k)

            if (
                (j + 1 < this.data.length) &&
                (this.data[j] < this.data[j + 1])
            ) {
                j++
            }

            if (this.data[k] > this.data[j]) {
                break
            }

            this.swap(k, j)
            k = j
        }
    }
}

function testMaxHeap() {
    let n = 1000000
    let maxHeap = new MaxHeap<number>()

    for (let i = 0; i < n; i++) {
        maxHeap.add(Math.random())
    }

    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = maxHeap.extractMax()
    }

    for (let i = 0; i < n; i++) {
        if (arr[i - 1] < arr[i]) {
            throw new Error('Error')
        }
    }

    console.log('Test MaxHeap completed.')
}

testMaxHeap()
