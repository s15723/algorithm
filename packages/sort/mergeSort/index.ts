import insertionSort from '../insertionSort'
/**
 * 归并排序 O(nlogn)
 *
 * Memory n
 */
export default function mergeSort<T>(arr: T[]) {
    const n = arr.length

    _mergeSort(arr, 0, n - 1)
}

function _mergeSort<T>(arr: T[], left: number, right: number) {
    // if (left >= right) {
    //     return
    // }
    // 优化2
    // 对于小规模数组, 使用插入排序，可能会进化成 O(n)
    if (right - left <= 15) {
        insertionSort(arr, left, right)
        return
    }

    const middle = Math.floor((right + left) / 2)
    _mergeSort(arr, left, middle)
    _mergeSort(arr, middle + 1, right)
    // 优化1
    // 当 arr[middle] <= arr[middle + 1] 时，前半数组有序，后半数组有序，整个数组完全有序
    // 没必要再进行归并
    if (arr[middle] > arr[middle + 1]) {
        _merge(arr, left, middle, right)
    }
}

function _merge<T>(arr: T[], left: number, middle: number, right: number) {
    const aux: T[] = []
    for (let i = left; i <= right; i++) {
        aux[i - left] = arr[i]
    }

    let i = left, j = middle + 1
    for (let k = left; k <= right; k++) {
        if (i > middle) {
            arr[k] = aux[j - left]
            j++
        } else if (j > right) {
            arr[k] = aux[i - left]
            i++
        } else if (aux[i - left] < aux[j - left]) {
            arr[k] = aux[i - left]
            i++
        } else {
            arr[k] = aux[j - left]
            j++
        }
    }
}
