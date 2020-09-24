import { swap } from "../../../packages/sort/helpers";

/**
 * 移除元素，返回移除后数组的长度
 * tip: 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * https://leetcode-cn.com/problems/remove-element/
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
export function removeElement(nums: number[], val: number): number {
    let n = nums.length
    // [0...k] 为不需要删除的元素
    // (k...n-1] 为需要删除的目标元素
    // 需要删除的元素相对较少，swap次数较少
    let k = n-1
    let i = 0
    while(i < n) {
        if (nums[i] === val) {
            // 此处不需要维持原来的顺序
            // 所以将需要删除的元素和后面未处理元素交换位置
            // 同时对 n 做处理
            swap(nums, i, k)
            n--
            k--
        } else {
            i++
        }
    }

    return k + 1
}

const nums = [0,1,2,2,3,0,4,2]
console.log(removeElement(nums, 2))
console.log(nums)
