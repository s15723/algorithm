/**
 * 移动零到数组末尾
 * https://leetcode-cn.com/problems/move-zeroes/
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
export function moveZeroes(nums: number[]): void {
    const n = nums.length
    // [0...k) 包含所有非零元素
    let k = 0
    for (let i = 0; i < n; i++) {
        if (nums[i]) {
            nums[k] = nums[i]
            k++
        }
    }
    for (let j = k; j < n; j++) {
        nums[j] = 0
    }
}

// 最优解
export function moveZeroes2(nums: number[]): void {
    const n = nums.length
    // [0...k) 包含所有非零元素
    let k = 0
    for (let i = 0; i < n; i++) {
        // 代码执行的总操作（数组写入）是非 0 元素的数量
        // 还处理了所有元素都是非零的情况
        if (nums[i]) {
            if (i !== k) {
                swap(nums, k, i)
            }
            k++
        }
    }
}

const swap = (arr: number[], i: number, j: number) => {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

let arr = [0, 1, 0, 3, 12]
moveZeroes(arr)
// moveZeroes2(arr)
console.log(arr)
