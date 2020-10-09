import { swap } from '../helpers'
import insertionSort from '../insertionSort'
/**
 * 双路快排 O(nlogn)
 *
 * 主要解决的问题是，处理有大量重复元素的数组
 * 使重复元素平均分布在数组两边(以 val 为分界点)
 */
export default function quickSort2Ways<T>(arr: T[]) {
    const n = arr.length

    _quickSort2(arr, 0, n - 1)
}

function _quickSort2<T>(arr: T[], left: number, right: number) {
    if (right - left <= 15) {
        insertionSort(arr, left, right)
        return
    }

    const p = partition(arr, left, right)
    _quickSort2(arr, left, p - 1)
    _quickSort2(arr, p + 1, right)
}

// 双路快速排序的partition
// 返回p, 使得arr[l...p-1] <= arr[p] ; arr[p+1...r] >= arr[p]
// 双路快排处理的元素正好等于arr[p]的时候要注意，详见下面的注释：）
function partition<T>(arr: T[], left: number, right: number) {
    swap(arr, left, Math.floor(Math.random() * (right - left + 1) + left))

    const val = arr[left]

    // arr[l+1...i) <= v; arr(j...r] >= v
    let i = left + 1,
        j = right
    while (true) {
        while (i <= right && arr[i] < val) i++
        while (j >= left + 1 && arr[j] > val) j--
        if (i > j) {
            break
        }
        swap(arr, i, j)
        i++
        j--
    }
    // i 最后停在第一个 >= val 的位置
    // j 最后停在最后一个 <= val 的位置
    swap(arr, left, j)

    return j
}
