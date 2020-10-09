import { swap } from '../helpers'
import insertionSort from '../insertionSort'
/**
 * 三路快排 O(nlogn)
 */
export default function quickSort3Ways<T>(arr: T[]) {
    const n = arr.length

    _quickSort(arr, 0, n - 1)
}

function _quickSort<T>(arr: T[], left: number, right: number) {
    if (right - left <= 15) {
        insertionSort(arr, left, right)
        return
    }

    swap(arr, left, Math.floor(Math.random() * (right - left + 1) + left))

    const val = arr[left]

    let lt = left // arr[left+1...lt] < v
    let gt = right + 1 // arr[gt...right] > v
    let i = left + 1 // arr[lt+1...i) = v

    while (i < gt) {
        if (arr[i] < val) {
            swap(arr, lt + 1, i)
            i++
            lt++
        } else if (arr[i] > val) {
            swap(arr, gt - 1, i)
            gt--
        } else {
            i++
        }
    }

    // 排完序后
    // arr[left, lt-1] < v
    // arr[lt, gt-1] = v
    // arr[gt, right] > v
    swap(arr, left, lt)

    _quickSort(arr, left, lt - 1)
    _quickSort(arr, gt, right)
}
