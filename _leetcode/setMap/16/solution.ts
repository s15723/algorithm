function threeSumClosest(nums: number[], target: number): number {
    const n = nums.length
    nums = nums.sort((a, b) => a - b)
    let res = nums[0] + nums[1] + nums[2]
    let diff = Math.abs(target - res)

    for (let i = 0; i < n; i++) {
        let l = i + 1,
            r = n - 1,
            t = target - nums[i]
        while (l < r) {
            if (nums[l] + nums[r] === t) {
                return target
            } else {
                if (Math.abs(t - nums[l] - nums[r])< diff) {
                    res = nums[i] + nums[l] + nums[r]
                    diff = Math.abs(t - nums[l] - nums[r])
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
