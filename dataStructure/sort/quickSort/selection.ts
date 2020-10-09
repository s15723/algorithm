/**
 * 寻找nums数组中第k小的元素
 */

import { swap, generateOrderedArray } from '../helpers'

// 从 1 开始
export default function selection<T>(arr: T[], k: number): number {
    return _selection(arr, k - 1)
}

// 从 0 开始
function _selection<T>(arr: T[], k: number) {
    const n = arr.length

    return solve(arr, 0, n - 1, k)
}

function solve<T>(arr: T[], l: number, r: number, k: number) {
    if (l === r) {
        return arr[l]
    }

    const p = partition(arr, l, r)

    if (k === p) {
        return arr[k]
    } else if (k < p) {
        // 如果 k < p, 只需要在arr[l...p-1]中找第k小元素即可
        return solve(arr, l, p - 1, k)
    } else {
        // 如果 k > p, 则需要在nums[p+1...r]中找第k-p-1小元素
        // 注意: 由于我们传入__selection的依然是nums, 而不是nums[p+1...r],
        // 所以传入的最后一个参数依然是k, 而不是k-p-1
        return solve(arr, p + 1, r, k)
    }
}

// arr[l...j-1] < v,arr[j...r] >= v
function partition<T>(arr: T[], l: number, r: number): number {
    swap(arr, l, Math.floor(Math.random() * (r - l + 1) + l))

    const val = arr[l]

    // arr[l+1,j] < v；arr[j+1, i) > v
    let j = l
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < val) {
            swap(arr, i, ++j)
        }
    }

    swap(arr, l, j)

    return j
}

function test() {
    // 生成一个大小为n, 包含0...n-1这n个元素的随机数组arr
    let N = 100
    let arr1 = generateOrderedArray(N)
    console.log(arr1)

    // 对外 selection 对arr数组求第i小元素, 应该为 arr[i-1]
    for (let i = 1; i < N; i++) {
        console.log(`test ${i}: ${selection(arr1, i)}`)
    }
    console.log('Test selection completed')

    // 内部 _selection 对arr数组求第i小元素, 应该为 i
    for (let i = 0; i < N; i++) {
        console.log(`test ${i}: ${_selection(arr1, i)}`)
    }
    console.log('Test ——selection completed')
}

test()
