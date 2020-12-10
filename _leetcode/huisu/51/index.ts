function solveNQueens(n: number): string[][] {
    const res: string[][] = []

    // 当前列是否摆放棋子
    const col: boolean[] = Array(n).fill(false)
    // 当前位置正斜率对角线是否摆放棋子
    const dia1: boolean[] = Array(2 ^ (n - 1)).fill(false)
    // 当前位置负斜率对角线是否摆放棋子
    const dia2: boolean[] = Array(2 ^ (n - 1)).fill(false)

    const generateBoard = (n: number, row: number[]): string[] => {
        if (n !== row.length) {
            throw new Error('皇后放少了')
        }

        const board: string[] = []

        for (let i = 0; i < n; i++) {
            let cur = ''
            for (let j = 0; j < n;j++) {
                if (j === row[i]) {
                    cur += 'Q'
                } else {
                    cur += '.'
                }
            }
            board.push(cur)
        }

        return board
    }

    // 尝试在一个n皇后问题中, 摆放第 index 行的皇后位置
    const putQueue = (n: number, index: number, row: number[]) => {
        if (n === index) {
            res.push(generateBoard(n, row))
            return
        }

        for (let i = 0; i < n; i++) {
            if (!col[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
                row.push(i)
                col[i] = true
                dia1[index + i] = true
                dia2[index - i + n - 1] = true
                putQueue(n, index + 1, row)
                row.pop()
                col[i] = false
                dia1[index + i] = false
                dia2[index - i + n - 1] = false
            }
        }
        return
    }

    const row: number[] = []
    putQueue(n, 0, row)

    return res
}

console.log(solveNQueens(4))
