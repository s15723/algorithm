/**
 * 四数相加 II
 * https://leetcode-cn.com/problems/4sum-ii/
 * 
 * 时间 O(n^2)
 * 空间 O(n^2)
 */
function fourSumCount(A: number[], B: number[], C: number[], D: number[]): number {
    const record1 = new Map<number, number>()
    const record2 = new Map<number, number>()
    let res = 0

    // O(n^2)
    for (let val1 of A) {
        for (let val2 of B) {
            record1.set(val1 + val2, (record1.get(val1 + val2) || 0) + 1)
        }
    }

    for (let val3 of C) {
        for (let val4 of D) {
            record2.set(val3 + val4, (record2.get(val3 + val4) || 0) + 1)
        }
    }

    // O(nlogn)
    // 假设查找表操作为 O(logn)，也可以为 O(1)
    for (let val of record1) {
        if (record2.has(0 - val[0])) {
            res += val[1] * record2.get(0 - val[0])!
        }
    }

    return res
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))
