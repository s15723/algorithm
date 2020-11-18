/**
 * 双指针对撞
 */
export function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) return []

    let res: number[][] = []

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue
        }
        let l = i + 1,
            r = nums.length - 1
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while(l < r && nums[l] === nums[l + 1]) {
                    l++
                }
                while(l < r && nums[r] === nums[r - 1]) {
                    r--
                }
                l++
                r--
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l++
            } else {
                r--
            }
        }
    }

    return res
}
