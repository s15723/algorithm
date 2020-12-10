function numIslands(grid: string[][]): number {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0
    }
    const m = grid.length
    const n = grid[0].length
    const visited: boolean[][] = []
    const initVisited = () => {
        for (let i = 0; i < m; i++) {
            visited[i] = []
            for (let j = 0; j < n; j++) {
                visited[i][j] = false
            }
        }
    }
    initVisited()

    const d: number[][] = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ]

    const inArea = (x: number, y: number) => {
        return x >= 0 && x < m && y >=0 && y < n
    }

    // 为什么这个递归函数里没有终止条件和回溯的表现
    // 1.我们进入递归的条件之一是 inArea，而递归的终止条件无非是越界了到头了
    // 2.不需要 visited[x][y] = false 是因为我们是要将所有的陆地标记，而不是寻找一条路径
    const dfs = (grid: string[][], x:number, y: number) => {
        visited[x][y] = true
        for (let i = 0; i < 4; i++) {
            const newx = x + d[i][0]
            const newy = y + d[i][1]
            if (inArea(newx, newy) && !visited[newx][newy] && grid[newx][newy] === '1') {
                dfs(grid, newx, newy)
            }
        }
    }

    let res = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                res ++
                dfs(grid, i, j)
            }
        }
    }

    return res
}
