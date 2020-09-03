import { generateRandomArray, generateNearlyOrderedArray, testSort } from './helpers'
import selectionSort from './selectionSort'
import insertionSort from './insertionSort'
import { bubbleSort, bubbleSort2 } from './bubbleSort'
import shellSort from './shellSort'
import mergeSort from './mergeSort'

function test() {
    let N = 20000

    // 测试1 一般测试 O(n^2)
    // 冒泡排序因为相邻元素要不停的 swap，消耗时间最长
    // 选择排序其次
    // 插入排序不需要 swap 第二
    // 希尔排序最快 O(n^(3/2))
    console.log(`Test for random array, size = ${N},random range [0,${N}]`)
    let arr1 = generateRandomArray(N, 0, N)
    let arr2 = arr1.slice()
    let arr3 = arr1.slice()
    let arr4 = arr1.slice()
    let arr5 = arr1.slice()
    let arr6 = arr1.slice()
    testSort('选择排序', selectionSort, arr1)
    testSort('插入排序', insertionSort, arr2)
    testSort('冒泡排序', bubbleSort, arr3)
    testSort('冒泡排序2', bubbleSort2, arr4)
    testSort('希尔排序', shellSort, arr5)
    testSort('归并排序', mergeSort, arr6)

    // 测试2 测试近乎有序的数组
    let swapTimes = 100
    console.log(`Test for nearly ordered array, size = ${N},swap time = ${swapTimes}`)
    arr1 = generateNearlyOrderedArray(N, swapTimes)
    arr2 = arr1.slice()
    arr3 = arr1.slice()
    arr4 = arr1.slice()
    arr5 = arr1.slice()
    arr6 = arr1.slice()

    testSort('选择排序', selectionSort, arr1)
    testSort('插入排序', insertionSort, arr2)
    testSort('冒泡排序', bubbleSort, arr3)
    testSort('冒泡排序2', bubbleSort2, arr4)
    testSort('希尔排序', shellSort, arr5)
    testSort('归并排序', mergeSort, arr6)

    // 测试3 测试完全有序的数组
    // 插入排序，冒泡排序 O(n)
    // 选择排序 O(n^2)
    // 希尔排序 O(n^(3/2))，相对较慢，因为不管有没有序，它总是得遍历到满足 h >= 1 的最小值
    swapTimes = 0
    N = 10000000
    console.log(`Test for ordered array, size = ${N}`)
    arr1 = generateNearlyOrderedArray(N, swapTimes)
    arr2 = arr1.slice()
    arr3 = arr1.slice()
    arr4 = arr1.slice()
    arr5 = arr1.slice()
    arr6 = arr1.slice()
    // 选择排序太慢了，不测了
    // testSort('选择排序', selectionSort, arr1)
    testSort('插入排序', insertionSort, arr2)
    testSort('冒泡排序', bubbleSort, arr3)
    testSort('冒泡排序2', bubbleSort2, arr4)
    testSort('希尔排序', shellSort, arr5)
    testSort('归并排序', mergeSort, arr6)
}

test()
