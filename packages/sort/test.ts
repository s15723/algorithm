import { generateRandomArray, generateNearlyOrderedArray, testSort } from './helpers'
import selectionSort from './selectionSort'
import insertionSort from './insertionSort'
import { bubbleSort, bubbleSort2 } from './bubbleSort'

function test() {
    let N = 20000

    // 测试1 一般测试
    console.log(`Test for random array, size = ${N},random range [0,${N}]`)
    let arr1 = generateRandomArray(N, 0, N)
    let arr2 = arr1.slice()
    let arr3 = arr1.slice()
    let arr4 = arr1.slice()
    testSort('选择排序', selectionSort, arr1)
    testSort('插入排序', insertionSort, arr2)
    testSort('冒泡排序', bubbleSort, arr3)
    testSort('冒泡排序2', bubbleSort2, arr4)

    // 测试2 测试近乎有序的数组
    let swapTimes = 100
    console.log(`Test for nearly ordered array, size = ${N},swap time = ${swapTimes}`)
    arr1 = generateNearlyOrderedArray(N, swapTimes)
    arr2 = arr1.slice()
    arr3 = arr1.slice()
    arr4 = arr1.slice()
    testSort('选择排序', selectionSort, arr1)
    testSort('插入排序', insertionSort, arr2)
    testSort('冒泡排序', bubbleSort, arr3)
    testSort('冒泡排序2', bubbleSort2, arr4)

    // 测试3 测试完全有序的数组
    // 插入排序，冒泡排序 O(n)
    // 选择排序 O(n ^ 2)
    swapTimes = 0
    N = 10000000
    console.log(`Test for ordered array, size = ${N}`)
    arr1 = generateNearlyOrderedArray(N, swapTimes)
    arr2 = arr1.slice()
    arr3 = arr1.slice()
    arr4 = arr1.slice()
    // 选择排序太慢了，不测了
    // testSort('选择排序', selectionSort, arr1)
    testSort('插入排序', insertionSort, arr2)
    testSort('冒泡排序', bubbleSort, arr3)
    testSort('冒泡排序2', bubbleSort2, arr4)
}

test()
