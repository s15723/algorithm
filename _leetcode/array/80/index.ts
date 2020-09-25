/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
export function removeDuplicates(nums: number[]): number {
    const n = nums.length

    // [0...k) 包含的元素为删除后的元素
    let k = 1
    let freq = 1
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[k - 1]) {
            if (i !== k) {
                nums[k] = nums[i]
            }
            k++
            freq = 1
        } else {
            if (freq < 2) {
                if (i !== k) {
                    nums[k] = nums[i]
                }
                k++
                freq++
            }
        }
    }
    return k
}

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
console.log(removeDuplicates(nums))
console.log(nums)
