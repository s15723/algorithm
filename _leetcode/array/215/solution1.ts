/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 *
 * 解法一：最小堆排序
 * 时间复杂度 O(nlogk)
 * 空间复杂度 O(k)
 */
function findKthLargest(nums: number[], k: number): number {
    const n = nums.length
    const minHeap: number[] = []

    for (let i = 0; i < n; i++) {
        if (i < k) {
            minHeap[i] = nums[i]
            if (i === k - 1) {
                heapify(minHeap)
            }
        } else if (nums[i] > minHeap[0]) {
            minHeap[0] = nums[i]
            siftDown(minHeap, 0)
        }
    }
    console.log(minHeap)
    return minHeap[0]
}

function leftChild(k: number) {
    return 2 * k + 1
}

function myParent(k: number) {
    return Math.floor((k - 1) / 2)
}

function siftDown(arr: number[], k: number) {
    const n = arr.length
    const e = arr[k]
    while (leftChild(k) < n) {
        // arr[j] 存储着左右孩子中较小的节点
        let j = leftChild(k)
        if (j + 1 < n && arr[j + 1] < arr[j]) {
            j++
        }
        if (e < arr[j]) {
            break
        }

        arr[k] = arr[j]
        k = j
    }
    arr[k] = e
}

function heapify(arr: number[]) {
    for (let i = myParent(arr.length - 1); i >= 0; i--) {
        siftDown(arr, i)
    }
}

console.log(findKthLargest([3,2,1,5,6,4], 2))
