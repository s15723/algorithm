function combinationSum2(candidates: number[], target: number): number[][] {
    if (candidates.length === 0) return []

    const res: number[][] = []

    function findCombinations(
        candidates: number[],
        target: number,
        index: number,
        c: number[]
    ) {
        if (target === 0) {
            res.push([...c])
            return
        }

        for (let i = index; i < candidates.length; i++) {
            debugger
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue
            }

            if (candidates[i] <= target) {
                c.push(candidates[i])
                findCombinations(candidates, target - candidates[i], i + 1, c)
                c.pop()
            }
        }
        return
    }

    const c: number[] = []
    candidates = candidates.sort((a, b) => a - b)
    findCombinations(candidates, target, 0, c)
    return res
}

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
