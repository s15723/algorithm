function fourSum(nums: number[], target: number): number[][] {
    const n = nums.length
    if (n < 4) return []

    const res: number[][] = []
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break
        }
        if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) {
            continue
        }
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i+ 1 && nums[j] === nums[j-1]) {
                continue
            }
            if (nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) {
                break
            }
            if (nums[i] + nums[j] + nums[n-1] + nums[n-2] < target) {
                continue
            }
            let l = j + 1, r = n - 1
            while(l < r) {
                if (nums[i] + nums[j] + nums[l] + nums[r] === target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    while(nums[l] === nums[l+1]) {
                        l++
                    }
                    while(nums[r] === nums[r-1]) {
                        r--
                    }
                    l++
                    r--
                } else if (nums[i] + nums[j] + nums[l] + nums[r] < target) {
                    l++
                } else {
                    r--
                }
            }
        }
    }

    return res
}
