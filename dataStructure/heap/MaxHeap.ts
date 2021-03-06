/**
 * 二叉堆
 * 1.是完全二叉树(除了最后一层，其它层所有节点个数必须是最大值)，所以时间复杂度为 O(h)，不会出现极端情况退化成链表 O(n)
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
export default class MaxHeap<T> {
    private data: Array<T> = []

    // 将任意数组整理成堆的形状
    // O(n)，这种方法不用操作叶子节点，少操作几乎一半的节点
    // 如果是遍历数组 add 到堆中，时间复杂度为 O(nlogn) > O(n)

    // 这样子会额外创造一个大小为 n 的空间(最大堆)
    // 空间复杂度为 O(n)
    constructor(arr: T[] = []) {
        this.data = arr
        if (arr.length > 1) {
            for (let i = this.parent(arr.length - 1); i >= 0; i--) {
                this.siftDown(i)
            }
        }
    }

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
    // O(h) ==> O(logn)
    // 最差就是 O(logn)，因为堆是一种完全二叉树，不会出现二分搜索树退化成链表那种极端情况
    add(item: T): void {
        this.data.push(item)
        this.siftUp(this.data.length - 1)
    }

    // O(h)
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

    // O(h) ==> O(logn)
    extractMax(): T {
        const ret = this.findMax()
        this.swap(0, this.data.length - 1)
        this.data.pop()
        this.siftDown(0)

        return ret
    }

    // O(h)
    private siftDown(k: number): void {
        while (this.leftChild(k) < this.data.length) {
            // data[j] 是 leftChild 和 rightChild 中的最大值
            let j = this.leftChild(k)

            if (j + 1 < this.data.length && this.data[j] < this.data[j + 1]) {
                j++
            }

            if (this.data[k] > this.data[j]) {
                break
            }

            this.swap(k, j)
            k = j
        }
    }

    // 取出堆中的最大元素，并替换成元素 item
    // O(h)
    replace(item: T): T {
        const ret = this.findMax()
        this.data[0] = item
        this.siftDown(0)

        return ret
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

// testMaxHeap()

function testHeapify(testData: number[], isHeapify: boolean) {
    const startTime = Date.now()

    let maxHeap: MaxHeap<number>

    if (isHeapify) {
        maxHeap = new MaxHeap(testData)
    } else {
        maxHeap = new MaxHeap()
        for (let i = 0; i < testData.length; i++) {
            maxHeap.add(testData[i])
        }
    }

    let arr = []
    for (let i = 0; i < testData.length; i++) {
        arr[i] = maxHeap.extractMax()
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            throw new Error('error')
        }
    }

    console.log('Test MaxHeap completed.')

    const endTime = Date.now()

    return `${(endTime - startTime) / 1000}s`
}

function test() {
    const n = 1000000
    const testData1 = []
    for (let i = 0; i < n; i++) {
        testData1.push(i)
    }
    const testData2 = testData1.slice()

    const time1 = testHeapify(testData1, true)
    const time2 = testHeapify(testData2, false)

    console.log('withHeapify', time1)
    console.log('withoutHeapify', time2)
}

test()
