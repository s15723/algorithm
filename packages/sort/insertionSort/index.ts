import {
    swap,
    generateRandomArray,
    generateNearlyOrderedArray,
    testSort,
} from '../helpers'
import selectionSort from '../selectionSort'
/**
 * 插入排序 O(n^2)，最好可达 O(n)
 * 当排序的数组本身就接近有序时，时间复杂度可达 O(n)
 * 因为目标元素找到合适的插入位置后就会退出第二层循环
 *
 * Memory 1
 *
 */

export default function insertionSort<T>(arr: T[]) {
    const length = arr.length

    // for (let i = 1; i < length; i++) {
    //     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
    //         // swap 相当于三次赋值，会有额外的性能损耗
    //         swap(arr, j, j - 1)
    //     }
    // }

    for (let i = 1; i < length; i++) {
        let e = arr[i]
        let j: number
        for (j = i; j > 0 && arr[j - 1] > e; j--) {
            arr[j - 1] = arr[j]
        }
        arr[j] = e
    }
}

function testInsertionSort() {
    const n = 1000000
    const arr1 = generateRandomArray(n, 0, 20000)
    const arr2 = arr1.slice()
    const arr3 = generateNearlyOrderedArray(n, 100)
    // testSort('selectionSort', selectionSort, arr1)
    testSort('insertionSort', insertionSort, arr2)
    testSort('insertionSort', insertionSort, arr3)
}

testInsertionSort()
