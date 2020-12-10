function combinationSum(candidates: number[], target: number): number[][] {
    if (candidates.length === 0) return []

    const res: number[][] = []

    function findCombinations(candidates: number[], target: number, index: number, c: number[]) {
        if (target === 0) {
            res.push([...c])
            return
        }

        for (let i = index; i < candidates.length; i++) {
            const val = candidates[i]
            if (val <= target) {
                c.push(val)
                findCombinations(candidates, target - val, i, c)
                c.pop()
            }
        }
        return
    }

    let c: number[] = []
    findCombinations(candidates, target, 0, c)
    return res
};

console.log(combinationSum([2,3,6,7], 7))