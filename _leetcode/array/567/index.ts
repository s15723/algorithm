/**
 * 字符串的排列
 * https://leetcode-cn.com/problems/permutation-in-string/
 *
 * 时间 O(n)
 * 空间 O(1)
 */
function checkInclusion(s1: string, s2: string): boolean {
    const n = s2.length
    let l = 0,
        r = 0,
        valid = 0
    const needs = new Map()
    const windows = new Map()
    for (let val of s1) {
        needs.set(val, (needs.get(val) || 0) + 1)
    }
    while (r < n) {
        const inStr = s2[r]
        r++
        if (needs.has(inStr)) {
            windows.set(inStr, (windows.get(inStr) || 0) + 1)
            if (windows.get(inStr) === needs.get(inStr)) {
                valid++
            }
        }

        while (r - l === s1.length) {
            if (valid === needs.size) {
                return true
            }
            const outStr = s2[l]
            l++
            if (needs.has(outStr)) {
                if (windows.get(outStr) === needs.get(outStr)) {
                    valid--
                }
                windows.set(outStr, windows.get(outStr) - 1)
            }
        }
    }

    return false
}
