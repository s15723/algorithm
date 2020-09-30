/**
 * 颜色分类
 * https://leetcode-cn.com/problems/sort-colors/
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 最常规的一种思路
 * 时间复杂度 O(n)
 * 空间复杂度 O(k)
 */
export default function sortColors(nums: number[]): void {
    const n = nums.length
    const counts = [0, 0, 0]
    for (let i = 0; i < n; i++) {
        counts[nums[i]]++
    }
    // 计数排序简单版
    let index = 0
    for (let i = 0; i < counts.length; i++) {
        for (let j = 0; j < counts[nums[i]]; j++) {
            nums[index++] = i
        }
    }
}

let arr = [2, 0, 2, 1, 1, 0]
sortColors(arr)
console.log(arr)