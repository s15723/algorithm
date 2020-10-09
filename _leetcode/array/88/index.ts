/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * 
 * 说明:
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素
 */
export default function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p = m + n - 1 // 即将放入元素位置的指针
    let p1 = m - 1 // nums1 的指针
    let p2 = n - 1 // nums2 的指针

    while (p1 >= 0 && p2 >= 0) {
        nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--]
    }

    // 只有 p1 >= 0 的话，此时 p 和 p1 应该是重合的，不需要做处理
    if (p2 >= 0) {
        nums1.splice(0, p2 + 1, ...nums2.slice(0, p2 + 1))
        console.log(nums1)
    }
}

let nums1 = [2,0], m = 1, nums2 = [1], n = 1
merge(nums1, m, nums2, n)
console.log(nums1)