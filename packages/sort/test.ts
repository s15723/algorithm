import { generateRandomArray, generateNearlyOrderedArray, testSort } from './helpers'
import selectionSort from './selectionSort'
import insertionSort from './insertionSort'
import { bubbleSort, bubbleSort2 } from './bubbleSort'
import shellSort from './shellSort'
import mergeSort from './mergeSort/mergeSort'
import quickSort from './quickSort/quickSort'
import quickSort2Ways from './quickSort/quickSort2Ways'
import quickSort3Ways from './quickSort/quickSort3Ways'

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
    let arr7 = arr1.slice()
    let arr8 = arr1.slice()
    testSort('选择排序', selectionSort, arr1)
    testSort('插入排序', insertionSort, arr2)
    testSort('冒泡排序', bubbleSort, arr3)
    testSort('冒泡排序2', bubbleSort2, arr4)
    testSort('希尔排序', shellSort, arr5)
    testSort('归并排序', mergeSort, arr6)
    testSort('快速排序第一版', quickSort, arr6)
    testSort('双路快排', quickSort2Ways, arr7)
    testSort('三路快排', quickSort3Ways, arr8)

    // 测试2 测试近乎有序的数组
    let swapTimes = 100
    N = 1000000
    console.log(`Test for nearly ordered array, size = ${N},swap time = ${swapTimes}`)
    arr1 = generateNearlyOrderedArray(N, swapTimes)
    arr2 = arr1.slice()
    arr3 = arr1.slice()
    arr4 = arr1.slice()
    arr5 = arr1.slice()
    arr6 = arr1.slice()
    arr7 = arr1.slice()
    arr8 = arr1.slice()

    // testSort('选择排序', selectionSort, arr1)
    // testSort('插入排序', insertionSort, arr2)
    // testSort('冒泡排序', bubbleSort, arr3)
    // testSort('冒泡排序2', bubbleSort2, arr4)
    testSort('希尔排序', shellSort, arr5)
    testSort('归并排序', mergeSort, arr6)
    testSort('快速排序第一版', quickSort, arr6)
    testSort('双路快排', quickSort2Ways, arr7)
    testSort('三路快排', quickSort3Ways, arr8)

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
    arr7 = arr1.slice()
    arr8 = arr1.slice()
    // 选择排序太慢了，不测了
    // testSort('选择排序', selectionSort, arr1)
    testSort('插入排序', insertionSort, arr2)
    testSort('冒泡排序', bubbleSort, arr3)
    testSort('冒泡排序2', bubbleSort2, arr4)
    testSort('希尔排序', shellSort, arr5)
    testSort('归并排序', mergeSort, arr6)
    testSort('快速排序第一版', quickSort, arr6)
    testSort('双路快排', quickSort2Ways, arr7)
    testSort('三路快排', quickSort3Ways, arr8)

    // 测试4 测试大量元素重复的数组
    // 快速排序第一版在这里退化成 O(n^2) 了，因为重复元素会集中在 <=v 或者 >=v 的一端，破坏二叉树的平衡
    // 双路快排 O(nlogn)
    N = 1000000
    console.log(`Test for random array, size = ${N} , random range [0,10]`)
    arr6 = generateRandomArray(N, 0, 10)
    arr7 = arr6.slice()
    arr8 = arr7.slice()
    // testSort('快速排序第一版', quickSort, arr6)
    testSort('双路快排', quickSort2Ways, arr7)
    testSort('三路快排', quickSort3Ways, arr8)
}

test()
