/**
 * 删除排序数组中的重复项，返回非重复项的长度(不需要考虑数组中超出新长度后面的元素，即不需要真正删除元素)
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 
 * 两种解法区别在于对 k 的定义不同
 */
export function removeDuplicates(nums: number[]): number {
    let n = nums.length
    // [0...k] 包含所有非重复项
    // 默认塞入第一个元素
    let k = 0
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[k]) {
            k++
            nums[k] = nums[i]
        }
    }
    return k + 1
}

export function removeDuplicates2(nums: number[]): number {
    let n = nums.length
    // [0...k) 包含所有非重复项
    let k = 1
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// console.log(removeDuplicates(nums))
console.log(removeDuplicates2(nums))
console.log(nums)
