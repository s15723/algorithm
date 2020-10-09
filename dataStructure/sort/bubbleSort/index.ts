import { swap } from '../helpers'
/**
 * 冒泡排序 O(n^2)
 *
 * 有序，则会变成 O(n)
 *
 * Memory 1
 */
export function bubbleSort<T>(arr: T[]) {
    let n = arr.length
    let swapped = false

    do {
        swapped = false
        for (let i = 1; i <= n; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(arr, i, i - 1)
                swapped = true
            }
        }
        // 优化, 每一趟Bubble Sort都将最大的元素放在了最后的位置
        // 所以下一次排序, 最后的元素可以不再考虑
        n--
    } while (swapped)
}

export function bubbleSort2<T>(arr: T[]) {
    let n = arr.length
    let newn: number

    do {
        newn = 0
        for (let i = 1; i <= n; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(arr, i, i - 1)
                newn = i
            }
        }
        // 记录最后一次的交换位置,在此之后的元素在下一轮扫描中均不考虑
        n = newn
    } while (newn > 0)
}
