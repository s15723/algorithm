/**
 * 归并排序 O(nlogn)，自底向上
 * 
 * 空间复杂度 O(1)
 * 
 * 好处：用不到索引，可以应用于链表排序
 *
 * Memory n
 */
export default function mergeSortBU<T>(arr: T[]) {
    const n = arr.length

    for (let size = 1; size <= n; size += size) {
        for (let i = 0; i < n - size; i += 2 * size) {
            _merge(arr, i, i + size - 1, Math.min(i + 2 * size - 1, n - 1))
        }
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
