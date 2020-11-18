function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) return []

    const res: number[][] = []
    const freq = new Map<number, number>()
    for (let val of nums) {
        freq.set(val, (freq.get(val) || 0) + 1)
    }

    if (freq.get(0)! >= 3) {
        res.push([0, 0, 0])
    }

    nums = [...new Set(nums)].sort((a, b) => a - b)
    const n = nums.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] * 2 + nums[j] === 0 && freq.get(nums[i])! >= 2) {
                res.push([nums[i], nums[i], nums[j]])
            }
            if (nums[i] + nums[j] * 2 === 0 && freq.get(nums[j])! >= 2) {
                res.push([nums[i], nums[j], nums[j]])
            }

            const c = 0 - nums[i] - nums[j]
            if (c > nums[j] && freq.get(c)! > 0) {
                res.push([nums[i], nums[j], c])
            }
        }
    }

    return res
}
