function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const map = new Map<string, string>()
    const mapped = new Map<string, boolean>()

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            if (mapped.get(t[i])) {
                return false
            }

            map.set(s[i], t[i])
            mapped.set(t[i], true)
        } else if (map.get(s[i])! !== t[i]) {
            return false
        }
    }

    return true
};