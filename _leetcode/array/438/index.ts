/**
 * 找到字符串中所有字母异位词
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 */
function findAnagrams(s: string, p: string): number[] {
    // s[l...r) 为滑动窗口
    const n = s.length
    let l = 0,
        r = 0,
        valid = 0,
        res = []
    const needs = new Map()
    const freq = new Map()
    for (let val of p) {
        needs.set(val, (needs.get(val) || 0) + 1)
    }
    while (r < n) {
        const inStr = s[r]
        r++
        if (needs.has(inStr)) {
            freq.set(inStr, (freq.get(inStr) || 0) + 1)
            if (freq.get(inStr) === needs.get(inStr)) {
                valid++
            }
        }

        while (r - l === p.length) {
            if (valid === needs.size) {
                res.push(l)
            }
            const outStr = s[l]
            l++
            if (needs.has(outStr)) {
                if (needs.get(outStr) === freq.get(outStr)) {
                    valid--
                }
                freq.set(outStr, freq.get(outStr) - 1)
            }
        }
    }

    return res
}

console.log(findAnagrams('cbaebabacd', 'abc'))
