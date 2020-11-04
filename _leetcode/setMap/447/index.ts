/**
 * 回旋镖的数量
 * https://leetcode-cn.com/problems/number-of-boomerangs/
 *
 * 时间复杂度 O(n^2)
 */
function numberOfBoomerangs(points: number[][]): number {
    let res = 0
    const n = points.length

    for (let i = 0; i < n; i++) {
        const record = new Map<number, number>()

        for (let j = 0; j < n; j++) {
            if (i !== j) {
                record.set(
                    distance(points[i], points[j]),
                    (record.get(distance(points[i], points[j])) || 0) + 1
                )
            }
        }
        for (let val of record.values()) {
           res += val * (val - 1)
        }
    }

    return res
}

const distance = (i: number[], j: number[]) => {
    return (j[0] - i[0]) * (j[0] - i[0]) + (j[1] - i[1]) * (j[1] - i[1])
}

console.log(
    numberOfBoomerangs([
        [0, 0],
        [1, 0],
        [2, 0],
    ])
)
