/**
 * 最接近的三数之和
 * https://leetcode-cn.com/problems/3sum-closest/
 * 
 * 时间 O(n^2)
 * 空间 0(1)
 */
function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a, b) => a - b)
    const n = nums.length
    let res = nums[0] + nums[1] + nums[2]
    let diff = Math.abs(nums[0] + nums[1] + nums[2] - target)

    for (let i = 0; i < n; i++) {
        let l = i + 1, r = n - 1
        let t = target - nums[i]
        while (l < r) {
            if (nums[l] + nums[r] === t) {
                return target
            } else {
                if (Math.abs(nums[l] + nums[r] - t) < diff) {
                    res = nums[l] + nums[r] + nums[i]
                    diff = Math.abs(nums[l] + nums[r] - t)
                }

                if (nums[l] + nums[r] < t) {
                    l++
                } else {
                    r--
                }
            }
        }
    }

    return res
}
