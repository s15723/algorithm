/**
 * 排列问题
 */
function permute(nums: number[]): number[][] {
    const res: number[][] = []    
    if (nums.length === 0) {
        return res
    }

    const used = Object.create(null)
    for (let val of nums) {
        used[val] = false
    }

    function generatePermute(nums: number[], index: number, p: number[]) {
        if (index === nums.length) {
            res.push([...p])
            return
        }

        for (let val of nums) {
            if (!used[val]) {
                p.push(val)
                used[val] = true
                generatePermute(nums, index + 1, p)
                p.pop()
                used[val] = false
            }
        }
        return
    }

    let p: number[] = []
    generatePermute(nums, 0, p)
    return res
};