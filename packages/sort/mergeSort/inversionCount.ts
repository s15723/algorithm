import {
    generateRandomArray,
    generateOrderedArray,
    generateInversedArray,
} from '../helpers'
/**
 * 计算逆序对的个数
 */
export default function inversionCount<T>(arr: T[]) {
    const n = arr.length

    return solve(arr, 0, n - 1)
}

// 求 arr[l...r] 范围的逆序对个数
function solve<T>(arr: T[], l: number, r: number): number {
    if (l >= r) {
        return 0
    }

    const mid = Math.floor((l + r) / 2)
    const res1 = solve(arr, l, mid)
    const res2 = solve(arr, mid + 1, r)

    return res1 + res2 + merge(arr, l, mid, r)
}

// merge函数求出在arr[l...mid]和arr[mid+1...r]有序的基础上, arr[l...r]的逆序数对个数
function merge<T>(arr: T[], l: number, mid: number, r: number) {
    const aux: T[] = []
    for (let i = l; i <= r; i++) {
        aux[i - l] = arr[i]
    }

    let res = 0

    let i = l,
        j = mid + 1
    for (let k = l; k <= r; k++) {
        if (i > mid) {
            arr[k] = aux[j - l]
            j++
        } else if (j > r) {
            arr[k] = aux[i - l]
            i++
        } else if (aux[i - l] < aux[j - l]) {
            arr[k] = aux[i - l]
            i++
        } else {
            arr[k] = aux[j - l]
            j++
            res += mid - i + 1
        }
    }

    return res
}

function test() {
    let N = 5
    // 测试1: 测试随机数组
    let arr = generateRandomArray(N, 0, 100000)
    console.log(
        `Test Inversion Count for Random Array, n = ${N}: ${inversionCount(
            arr
        )}`
    )

    // 测试2: 测试完全有序的数组
    // 结果应该为0
    arr = generateOrderedArray(N)
    console.log(
        `Test Inversion Count for Ordered Array, n = ${N}: ${inversionCount(
            arr
        )}`
    )

    // 测试3: 测试完全逆序的数组
    // 结果应改为 N*(N-1)/2
    arr = generateInversedArray(N)
    console.log(
        `Test Inversion Count for Inversed Array, n = ${N}: ${inversionCount(
            arr
        )}`
    )
}

test()
