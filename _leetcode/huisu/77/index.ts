function combine(n: number, k: number): number[][] {
    const res: number[][] = []

    if (n <=0 || k <=0 || k > n) {
        return res
    }

    function generateCombinations(n: number, k: number, start: number, c: number[]) {
        if (k === c.length) {
            res.push([...c])
            // console.log(res)
            return
        }

        // 还有 k - c.size() 个空位，
        // 我们先选定一个 i，要在[i...n]中至少要有 k - c.size() 个元素
        // i 最大为 n - (k - c.size()) + 1
        for (let i = start; i <= n - (k - c.length) + 1; i++) {
            c.push(i)
            // console.log(`current ${i}`, c)
            generateCombinations(n, k, i + 1, c)
            c.pop()
            // console.log(`after ${i}`, c)
        }
        return
    }

    const c: number[] = []
    generateCombinations(n, k, 1, c)

    return res
};

// console.log(combine(4, 2))
