import { swap } from '../helpers'
/**
 * 选择排序 O(n^2)
 * 
 * Memory 1
 */

export default function selectionSort<T>(arr: T[]) {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
}