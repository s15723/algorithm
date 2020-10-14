/**
 * 三数之和
 * https://leetcode-cn.com/problems/3sum/
 * 
 * 时间 O(n^2)
 * 空间 O(1)
 */
function threeSum1(nums: number[]): number[][] {
    const n = nums.length
    const res = []
    nums = nums.sort((a, b) => a - b)

    if (n < 3) {
        return []
    }

    for (let i = 0; i < n; i++) {
        let l = i + 1, r = n - 1
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) {
                    l++
                }
                while (l < r && nums[r] === nums[r - 1]) {
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
};

function threeSum2(nums: number[]): number[][] {
    const res = []
    const freq = new Map<number, number>()
    for (let val of nums) {
        freq.set(val, (freq.get(val) || 0) + 1)
    }

    if (freq.get(0) >= 3) {
        res.push([0, 0, 0])
    }

    nums = [...new Set(nums)].sort((a, b) => a - b)
    const n = nums.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] * 2 + nums[j] === 0 && freq.get(nums[i]) >= 2) {
                res.push([nums[i], nums[i], nums[j]])
            }

            if (nums[i] + nums[j] * 2 === 0 && freq.get(nums[j]) >= 2) {
                res.push([nums[i], nums[j], nums[j]])
            }

            const c = 0 - nums[i] - nums[j]
            if (c > nums[j] && freq.get(c) > 0) {
                res.push([nums[i], nums[j], c])
            }
        }
    }
    return res
};

let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum2(nums))
