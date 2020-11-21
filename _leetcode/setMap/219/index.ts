function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let l = 0, r = 0
    const n = nums.length
    const record = new Set<number>()

    while(r < n) {
        // 什么时候更新结果
        if (record.has(nums[r])) {
            return true
        }
        // 扩大窗口时干什么
        record.add(nums[r])
        r++


        // 什么时候缩小窗口
        while(record.size === k+1) {
            // 缩小窗口时干什么
            record.delete(nums[l])
            l++
        }
    }

    return false
};