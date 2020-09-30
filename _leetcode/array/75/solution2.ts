import { swap } from "../../../packages/sort/helpers"

/**
 * 颜色分类
 * https://leetcode-cn.com/problems/sort-colors/
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 借鉴三路快排的思路原地排序
 * 时间复杂度 O(n)
 * 空间复杂度 O(k)
 */
export default function sortColors(nums: number[]): void {
    const n = nums.length
    // nums[0...zero] 0
    // nums[zero+1...i) 1
    // nums[i...two) 未处理
    // nums[two...n-1] 2
    let zero = -1, two = n
    let i = 0
    while (i < two) {
        if (nums[i] === 1) {
            i++
        } else if (nums[i] === 2) {
            swap(nums, i, --two)
        } else {
            swap(nums, ++zero, i++)
        }
    }
}

let arr = [2, 0, 2, 1, 1, 0]
sortColors(arr)
console.log(arr)