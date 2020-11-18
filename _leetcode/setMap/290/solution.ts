function wordPattern(pattern: string, s: string): boolean {
    const map = new Map<string, string>()
    const mapped = new Map<string, boolean>()

    const sArr = s.split(' ')
    if (pattern.length !== sArr.length) {
        return false
    }

    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i])) {
            if (mapped.get(sArr[i])!) {
                return false
            }

            map.set(pattern[i], sArr[i])
            mapped.set(sArr[i], true)
        } else if (map.get(pattern[i])! !== sArr[i]) {
            return false
        }
    }

    return true
};