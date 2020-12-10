function exist(board: string[][], word: string): boolean {
    const m = board.length,
        n = board[0].length
    // 上右下左对应的坐标索引操作
    const d: number[][] = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const visited: Array<Array<boolean>> = []
    const initVisited = () => {
        for (let i = 0; i < m; i++) {
            visited[i] = []
            for (let j = 0; j < n; j++) {
                visited[i][j] = false
            }
        }
    }
    initVisited()

    const inArea = (x: number, y: number) => {
        return x >= 0 && x < m && y >= 0 && y < n
    }

    // index 当前处理到 word 的哪个位置了，当前处理二维数组元素 board[startx][starty]
    const searchWord = (board: string[][], word: string, index: number, startx: number, starty: number): boolean => {
        if (index === word.length - 1) {
            return word[index] === board[startx][starty]
        }

        if (board[startx][starty] === word[index]) {
            visited[startx][starty] = true
            for (let i = 0; i < 4; i++) {
                const newx = startx + d[i][0]
                const newy = starty + d[i][1]
                if (inArea(newx, newy) && !visited[newx][newy]) {
                    if (searchWord(board, word, index + 1, newx, newy)) {
                        return true
                    }
                }
            }
            visited[startx][starty] = false
        }

        return false
    }

    // 递归遍历二维数组所有元素
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (searchWord(board, word, 0,i, j)) {
                return true
            }
        }
    }

    return false
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))
