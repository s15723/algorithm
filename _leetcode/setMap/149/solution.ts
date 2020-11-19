function maxPoints(points: number[][]): number {
    const n = points.length

    if (n <= 2) {
        return n
    }

    let res = 1

    for (let i = 0; i < n; i++) {
        const record = new Map<string, number>()
        let samePoint = 0
        for (let j = 0; j < n; j++) {
            if (
                points[i][0] === points[j][0] &&
                points[i][1] === points[j][1]
            ) {
                samePoint++
            } else {
                record.set(getSlopeStr(slope(points[i], points[j])), (record.get(getSlopeStr(slope(points[i], points[j])))! || 0) + 1)
            }
        }
        // 防止所有点都和 points[i] 重合，这样 record 里就没有存值了
        res = Math.max(res, samePoint)
        for(let val of record.values()) {
            res = Math.max(res, val + samePoint)
        }
    }

    return res
}

function gcd(a: number, b: number): number {
    if (a % b === 0) {
        return b
    }
    return gcd(b, a % b)
}

function slope(p1: number[], p2: number[]): [number, number] {
    let dy = p2[1] - p1[1]
    let dx = p2[0] - p1[0]

    if (dy === 0) {
        return [0, 1]
    }
    if (dx === 0) {
        return [1, 0]
    }

    let g = gcd(dy, dx)
    dy /= g
    dx /= g
    if (dx < 0) {
        dy = -dy
        dx = -dx
    }

    return [dy, dx]
}

function getSlopeStr(slope: [number, number]): string {
    return `${slope[0]}/${slope[1]}`
}
