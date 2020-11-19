// O(n^2)
function numberOfBoomerangs(points: number[][]): number {
    const n = points.length
    let res = 0
    
    for (let i = 0; i < n; i++) {
        const freq = new Map<number, number>()
        for (let j = 0; j < n; j++) {
            if (j !== i) {
                freq.set(distance(points[i], points[j]), (freq.get(distance(points[i], points[j]))! || 0) + 1)
            }
        }
        for (let val of freq.values()) {
            if (val > 1) {
                res += val * (val-1)
            }
        }
    }


    return res
};

function distance(p1: number[], p2: number[]): number {
    return (p2[0]-p1[0]) * (p2[0]-p1[0]) + (p2[1]-p1[1]) * (p2[1]-p1[1]) 
}

console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]))