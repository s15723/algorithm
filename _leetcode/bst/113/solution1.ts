/**
 * 回溯
 * 有个经验，若返回值为原始类型，则递归函数需要直接返回原始类型的值
 * 若返回值为引用类型，可以不用返回值，直接操作，
 * 但要记得回溯的时候会清除引用中已经使用过的值，所以使用引用值时，需要拷贝副本
 */
function pathSum(root: TreeNode | null, sum: number): number[][] {
    let res: number[][] = []
    let list: number[] = []

    if (!root) {
        return res
    }
    dfs(root, 0, sum, list, res)
    return res
};

function dfs(root: TreeNode | null, tsum: number,sum: number, list: number[], res: number[][]) {
    if (!root) {
        return
    }

    list.push(root.val)
    tsum += root.val

    if (!root.left && !root.right) {
        if (tsum === sum) {
            res.push([...list])
        }
    } else {
        if (root.left) {
            dfs(root.left, tsum, sum, list, res)
        }
        if (root.right) {
            dfs(root.right, tsum, sum, list, res)
        }
    }
    list.pop()
    return
}