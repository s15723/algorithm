/**
 * 长度最小的子数组
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 *
 * 暴力解法： 时间 O(n^2)，空间 O(1)
 */
function minSubArrayLen(s: number, nums: number[]): number {
    let ans = nums.length + 1
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum >= s) {
                ans = Math.min(ans, j - i + 1)
                break
            }
        }
    }

    return ans === nums.length + 1 ? 0 : ans
}

/**
 * 滑动窗口
 * 时间复杂度 O(2n)(l 和 r 各 n 次) ==> O(n)
 * 空间复杂度 O(1)
 */
function minSubArrayLen2(s: number, nums: number[]): number {
    // nums[l...r)
    const n = nums.length
    let l = 0,
        r = 0,
        sum = 0,
        res = n + 1

    while (r < n) {
        sum += nums[r]
        r++

        while (sum >= s) {
            res = Math.min(res, r - l)
            sum -= nums[l]
            l++
        }
    }

    return res === n + 1 ? 0 : res
}

let s = 7,
    nums = [2, 3, 1, 2, 4, 3]
console.log(minSubArrayLen2(s, nums))
