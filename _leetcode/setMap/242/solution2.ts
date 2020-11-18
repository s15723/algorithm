export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const arr: number[] = Array(26).fill(0)
    const codeA = 'a'.charCodeAt(0)
    for (let val of s) {
        arr[val.charCodeAt(0) - codeA]++
    }

    for (let val of t) {
        if (arr[val.charCodeAt(0) - codeA] > 0) {
            arr[val.charCodeAt(0) - codeA]--
        }
    }

    for (let val of arr) {
        if (val > 0) {
            return false
        }
    }

    return true
}
