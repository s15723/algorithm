import { swap } from '../helpers'
/**
 * 插入排序 O(n^2)，最好可达 O(n)
 * 当排序的数组本身就接近有序时，时间复杂度可达 O(n)
 * 因为目标元素找到合适的插入位置后就会退出第二层循环
 *
 * Memory 1
 *
 */

export default function insertionSort<T>(arr: T[], left?: number, right?: number) {
    // 对整个数组进行插入排序
    if (typeof left == 'undefined') {
        const n = arr.length

        // 寻找元素arr[i]合适的插入位置

        // 写法 1
        // for (let i = 1; i < n; i++) {
        //     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        //         swap(arr, j, j - 1)
        //     }
        // }

        // 写法 2
        for (let i = 1; i < n; i++) {
            const e = arr[i]
            let j: number = i
            for (; j > 0 && arr[j - 1] > e; j--) {
                arr[j] = arr[j - 1]
            }
            arr[j] = e
        }
    } else {
        // 对 [left, right] 进行插入排序
        for (let i = left + 1; i <= right; i++) {
            const e = arr[i]
            let j = i
            for (; j > left && arr[j - 1] > e; j--) {
                arr[j] = arr[j - 1]
            }
            arr[j] = e
        }

    }
}