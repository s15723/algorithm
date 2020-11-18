/**
 * 单词规律
 * https://leetcode-cn.com/problems/word-pattern/
 * 
 * 时间 O(len(pattern)))
 * 空间 O(len(pattern)))
 */
export function wordPattern(pattern: string, s: string): boolean {
    const arr = s.split(' ')
    if (pattern.length !== arr.length) {
        return false
    }
    const map = new Map<string, string>()
    const mapped = new Map<string, boolean>()

    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i])) {
            if (mapped.get(arr[i])) {
                return false
            }
            map.set(pattern[i], arr[i])
            mapped.set(arr[i], true)
        } else if (map.get(pattern[i]) !== arr[i]) {
            return false
        }
    }

    return true
}