/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 *
 * 解法二：快排思想
 * 时间复杂度 O(n)
 * 空间复杂度 findKthLargest O(logn) 递归消耗栈空间
 * 空间复杂度 findKthLargestNR O(1) 原地排序，没有借助额外的辅助空间
 */

import { swap } from '../../../packages/sort/helpers'

// 递归
function findKthLargest(nums: number[], k: number): number {
    // 第 k 大元素索引为 n - k

    return _findKthLargest(nums, 0, nums.length - 1, k)
}

function _findKthLargest(
    nums: number[],
    l: number,
    r: number,
    k: number
): number {
    const n = nums.length
    if (l === r) {
        return nums[l]
    }

    // p 是 partition 后元素的索引
    const p = partition(nums, l, r)
    if (p === n - k) {
        return nums[p]
    } else if (p < n - k) {
        return _findKthLargest(nums, p + 1, r, k)
    } else {
        // p > k
        return _findKthLargest(nums, l, p - 1, k)
    }
}

function partition(arr: number[], l: number, r: number): number {
    swap(arr, l, Math.floor(Math.random() * (r - l + 1) + l))
    const val = arr[l]
    // arr[l+1...i) <= val,arr(j...r] >= val
    let i = l + 1,
        j = r
    while (true) {
        while (i <= r && arr[i] < val) i++
        while (j >= l + 1 && arr[j] > val) j--
        if (i > j) {
            break
        }
        swap(arr, i, j)
        i++
        j--
    }
    // i 停留在第一个 >=val 的位置
    // j 停留在最后一个 <= val 的位置
    swap(arr, l, j)

    return j
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

// 非递归

function findKthLargestNR(nums: number[], k: number): number {
    const n = nums.length
    let l = 0,
        r = n - 1
    let target = n - k
    while (true) {
        const p = partition(nums, l, r)
        if (p === target) {
            return nums[p]
        } else if (p < target) {
            l = p + 1
        } else {
            r = p - 1
        }
    }
}
console.log(findKthLargestNR([3, 2, 1, 5, 6, 4], 2))
