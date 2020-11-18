export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const record = new Map<string, number>()
    for (let val of s) {
        record.set(val, (record.get(val)! || 0) + 1)
    }

    for (let val of t) {
        if (record.get(val) > 0) {
            record.set(val, record.get(val) - 1)
        } else {
            return false
        }
    }

    return true
};

console.log(isAnagram('rat', 'car'))