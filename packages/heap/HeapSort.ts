import { swap } from "../sort/helpers"

/**
 * 原地堆排序
 * 
 * 不使用一个额外的最大堆, 直接在原数组上进行原地的堆排序
 * 空间复杂度为 O(1)
 */
export default function heapSort<T>(arr: T[]) {
    const n = arr.length

    // heapify
    for (let i = parent(n - 1); i >= 0; i--) {
        siftDown(arr, n, i)
    }

    // arr[0...n-1]
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i)
        siftDown(arr, i, 0)
    }
}

function parent(i: number) {
    if (i === 0) {
        throw new Error("index-0 doesn't have parent.")
    }
    return Math.floor((i - 1) / 2)
}

function leftChild(i: number) {
    return 2 * i + 1
}

// 优化的shiftDown过程, 使用赋值的方式取代不断的swap,
// 该优化思想和我们之前对插入排序进行优化的思路是一致的
function siftDown<T>(arr: T[], n: number, k: number) {
    const e = arr[k]

    while (leftChild(k) < n) {
        let j = leftChild(k)

        if (j + 1 < n && arr[j + 1] > arr[j]) {
            j++
        }

        if (e >= arr[j]) {
            break
        }

        arr[k] = arr[j]
        k = j
    }

    arr[k] = e
}
