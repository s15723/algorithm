// O(n^2)
function fourSumCount(
    A: number[],
    B: number[],
    C: number[],
    D: number[]
): number {
    const map = new Map<number, number>()
    for (let val1 of C) {
        for (let val2 of D) {
            map.set(val1 + val2, (map.get(val1 + val2)! || 0) + 1)
        }
    }

    let res = 0
    for (let val1 of A) {
        for (let val2 of B) {
            const target = 0 - val1 - val2
            if (map.has(target)) {
                res += map.get(target)!
            }
        }
    }

    return res
}
