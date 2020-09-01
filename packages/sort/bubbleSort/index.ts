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

        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(arr, i, i - 1)
                swapped = true
            }
        }

        n--
    } while (swapped)
}

export function bubbleSort2<T>(arr: T[]) {
    let n = arr.length
    let newn: number

    do {
        newn = 0

        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(arr, i, i - 1)
                newn = i
            }
        }

        n = newn
    } while (newn > 0)
}
