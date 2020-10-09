/**
 * 给定一个已按照升序排列的有序!!!数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * 也可以使用二分查找法，时间复杂度为 O(nlogn)
 *
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
export function twoSum(numbers: number[], target: number): number[] {
    let l = 0,
        r = numbers.length - 1
    while (l < r) {
        if (numbers[l] + numbers[r] === target) {
            return [l + 1, r + 1]
        } else if (numbers[l] + numbers[r] < target) {
            l++
        } else {
            r--
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
