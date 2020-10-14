/**
 * 同构字符串
 * https://leetcode-cn.com/problems/isomorphic-strings/
 * 
 * 时间 O(len(s))
 * 空间 O(len of charset)
 */
function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    const n = s.length
    const map = new Map<string, string>()
    const mapped = new Map<string, boolean>()

    for (let i = 0; i < n; i++) {
        if (!map.has(s[i])) {
            if (mapped.get(t[i])) {
                return false
            }
            map.set(s[i], t[i])
            mapped.set(t[i], true)
        } else if (map.get(s[i]) !== t[i]) {
            return false
        }
    }

    return true
}