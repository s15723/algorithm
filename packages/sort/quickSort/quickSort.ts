import insertionSort from '../insertionSort'
/**
 * 快速排序基础版 O(nlogn)
 *
 * 对于近乎有序的数组, 快速排序算法退化成了O(n^2)级别的算法，会退化成一个长度为 n 的链表，每层处理 n 次
 * 可以通过 partition 里的优化 2 来解决，防止对于有序数组，一直取最左边的最小值导致树退化成链表
 * 
 */
export default function quickSort<T>(arr: T[]) {
    const n = arr.length

    _quickSort(arr, 0, n - 1)
}

// 递归使用快速排序，对 arr[left,right] 范围进行排序
function _quickSort<T>(arr: T[], left: number, right: number) {
    // if (left >= right) {
    //     return
    // }
    // 优化 1，对于小规模数组, 使用插入排序
    if (right - left <= 15) {
        insertionSort(arr, left, right)
        return
    }

    const p = partition(arr, left, right)
    _quickSort(arr, left, p - 1)
    _quickSort(arr, p + 1, right)
}

// 对 arr[left, right] 进行 partition 操作
// 返回 p，使得 arr[l...p-1] < arr[p] ; arr[p+1...r] > arr[p]
// 即找到原数组第一个元素排完序后应该在的位置
function partition<T>(arr: T[], left: number, right: number): number {
    // 优化 2
    // 随机在arr[l...r]的范围中, 选择一个数值作为标定点pivot
    swap(arr, left, Math.floor(Math.random() * (right - left + 1) + left))
    const v = arr[left]

    // arr[l+1, j] < v, arr[j+1, i) > v
    let j = left
    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < v) {
            // swap(arr, j + 1, i)
            // j++
            swap(arr, ++j, i)
        }
    }

    swap(arr, left, j)

    return j
}

function swap<T>(arr: T[], i: number, j: number) {
    if (i === j) return
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
