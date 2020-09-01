import { generateRandomArray, printArray, testSort, swap } from '../helpers'
/**
 * 选择排序 O(n^2)
 * Memory 1
 *
 * 在特定场景，尤其是辅助内存有限时，它会比复杂程序性能更好
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

function testSelectionSort() {
    const arr1 = generateRandomArray(10000, 0, 10000)
    testSort('selectionSort', selectionSort, arr1)
    // printArray(arr1)

    const arr2 = generateRandomArray(100000, 0, 10000)
    testSort('selectionSort', selectionSort, arr2)
    // printArray(arr2)
}

// testSelectionSort()
