/**
 * 最小覆盖子串
 * https://leetcode-cn.com/problems/minimum-window-substring/
 *
 * 时间 O(n)
 * 空间 O(1)
 */
function minWindow(s: string, t: string): string {
    // s[l...r)
    const n = s.length
    const needs = new Map()
    const windows = new Map()
    for (let val of t) {
        needs.set(val, (needs.get(val) || 0) + 1)
    }
    let l = 0,
        r = 0,
        valid = 0,
        start = 0,
        len = n + 1
    while (r < n) {
        const inStr = s[r]
        r++
        if (needs.has(inStr)) {
            windows.set(inStr, (windows.get(inStr) || 0) + 1)
            if (needs.get(inStr) === windows.get(inStr)) {
                valid++
            }
        }

        while (valid === needs.size) {
            if (r - l < len) {
                start = l
                len = r - l
            }
            const outStr = s[l]
            l++
            if (needs.has(outStr)) {
                if (needs.get(outStr) === windows.get(outStr)) {
                    valid--
                }
                windows.set(outStr, windows.get(outStr) - 1)
            }
        }
    }

    return len === n + 1 ? '' : s.substr(start, len)
}

console.log(minWindow('a', 'a'))
