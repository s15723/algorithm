/**
 * 无重复字符的最长子串
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 *
 * input: "abcabcbb"
 * output: 3
 */
function lengthOfLongestSubstring(s: string): number {
    // s[l...r) 为滑动区块
    let l = 0,
        r = 0,
        res = 0
    const n = s.length
    const windows = new Map<string, number>()
    while (r < n) {
        const inStr = s[r]
        r++
        windows.set(inStr, (windows.get(inStr) || 0) + 1)

        while (windows.get(inStr) > 1) {
            const outStr = s[l]
            l++
            windows.set(outStr, windows.get(outStr) - 1)
        }

        res = Math.max(res, r - l)
    }

    return res
}

console.log(lengthOfLongestSubstring('bacabcbb'))
